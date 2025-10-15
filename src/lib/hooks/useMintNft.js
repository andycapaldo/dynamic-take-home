import { useState } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { useAccount, useWriteContract } from 'wagmi';

// --- Constants ---
const NFT_CONTRACT_ADDRESS = '0xeB4548650b5032b5D6CdB35DbBCE9845F643E3A2';
const NFT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "string", name: "tokenURI", type: "string" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

// --- Helper Function ---
const waitForUserOperationReceipt = async ({ publicClient, hash }) => {
  const timeout = 120_000;
  const interval = 2_000;
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    const receipt = await publicClient.request({ 
      method: 'eth_getUserOperationReceipt', 
      params: [hash] 
    });
    if (receipt) {
      return receipt;
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
  throw new Error(`Timed out waiting for UserOperation receipt for hash: ${hash}`);
};

export const useMintNft = () => {
  const { primaryWallet } = useDynamicContext();
  const { address } = useAccount();

  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState('');
  const [finalTxHash, setFinalTxHash] = useState('');

  const { isPending, writeContract, reset } = useWriteContract();

  const mintNft = async () => {
    setIsConfirmed(false);
    setError('');
    setFinalTxHash('');
    reset();
    
    if (!primaryWallet || !isEthereumWallet(primaryWallet)) {
      setError("Wallet not connected or not EVM compatible");
      return;
    }

    const sampleTokenURI = "https://example.com/nft/metadata.json";

    writeContract({
      abi: NFT_ABI,
      address: NFT_CONTRACT_ADDRESS,
      functionName: "mint",
      args: [address, sampleTokenURI],
      value: "0",
    }, {
      onSuccess: async (hash) => {
        try {
          setIsConfirming(true);
          const publicClient = await primaryWallet.getPublicClient();
          const userOpReceipt = await waitForUserOperationReceipt({ publicClient, hash });
          const finalHash = userOpReceipt.receipt.transactionHash;
          
          setFinalTxHash(finalHash);
          setIsConfirmed(true);
        } catch (e) {
          console.error("Error waiting for transaction:", e);
          setError(e.shortMessage || e.message);
        } finally {
          setIsConfirming(false);
        }
      },
      onError: (e) => {
        console.error("Contract write error:", e);
        setError(e.shortMessage || e.message);
      },
    });
  };

  return { 
    isPending, 
    isConfirming, 
    isConfirmed, 
    error, 
    finalTxHash, 
    mintNft 
  };
};