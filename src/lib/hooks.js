import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { isEthereumWallet } from "@dynamic-labs/ethereum";
import { isZeroDevConnector } from "@dynamic-labs/ethereum-aa";
import { useAccount } from "wagmi";
import { parseUnits } from "viem";

// --- Constants ---
const USDC_CONTRACT_ADDRESS = "0xe2342856dbdfbce5f6d6b7802b27e6168b380689";
const USDC_ABI = [
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const useMint = () => {
  const { primaryWallet } = useDynamicContext();

  const { address } = useAccount();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState(null);

  const mintTokens = async () => {
    setIsLoading(true);
    setError("");
    setTxHash(null);

    try {
      if (!primaryWallet || !isEthereumWallet(primaryWallet)) {
        throw new Error("Wallet not connected or not EVM compatible");
      }
      const walletClient = await primaryWallet.getWalletClient();

      const hash = await walletClient.writeContract({
        address: USDC_CONTRACT_ADDRESS,
        abi: USDC_ABI,
        functionName: "mint",
        args: [address, parseUnits("100", 6)],
      });

      setTxHash(hash);

      const connector = primaryWallet.connector;
      if (!isZeroDevConnector(connector)) {
        throw new Error("Connector is not a ZeroDev connector");
      }
      const kernelClient = connector.getAccountAbstractionProvider();

      const { receipt } = await kernelClient.waitForUserOperationReceipt({
        hash,
      });

      setTxHash(receipt.transactionHash);
    } catch (e) {
      console.error("Token mint failed:", e);
      setError(e.shortMessage || e.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    txHash,
    error,
    mintTokens,
  };
};
