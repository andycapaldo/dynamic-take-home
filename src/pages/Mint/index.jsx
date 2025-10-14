import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";

// --- HELPER FUNCTION ---
// This function manually polls the bundler for the UserOperation receipt.
const waitForUserOperationReceipt = async ({ publicClient, hash }) => {
  const timeout = 120_000;
  const interval = 2_000;
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const receipt = await publicClient.request({
      method: "eth_getUserOperationReceipt",
      params: [hash],
    });

    if (receipt) {
      return receipt;
    }

    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  throw new Error(
    `Timed out waiting for UserOperation receipt for hash: ${hash}`
  );
};

const Mint = () => {
  const { primaryWallet } = useDynamicContext();
  const { address } = useAccount();

  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [finalTxHash, setFinalTxHash] = useState("");

  const { isPending, writeContract, reset } = useWriteContract();

  const mintNft = async () => {
    setIsConfirmed(false);
    reset();
    const sampleTokenURI = "https://example.com/nft/metadata.json";

    writeContract(
      {
        abi: [
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
        ],
        address: "0xeB4548650b5032b5D6CdB35DbBCE9845F643E3A2",
        functionName: "mint",
        args: [address, sampleTokenURI],
        value: "0",
      },
      {
        onSuccess: async (hash) => {
          if (!primaryWallet) return;

          try {
            setIsConfirming(true);
            const publicClient = await primaryWallet.getPublicClient();

            const userOpReceipt = await waitForUserOperationReceipt({
              publicClient,
              hash,
            });

            const finalHash = userOpReceipt.receipt.transactionHash;
            setFinalTxHash(finalHash);
            await waitForUserOperationReceipt({ publicClient, hash });

            setIsConfirmed(true);
          } catch (e) {
            console.error("Error waiting for transaction:", e);
          } finally {
            setIsConfirming(false);
          }
        },
        onError: (e) => {
          console.error("Contract write error:", e);
        },
      }
    );
  };

  return (
    <div>
      <p className="my-4">Click the button below to mint an NFT (only on Base Sepolia)</p>
      <button
        className="border border-blue-green/65 shadow-xl bg-blue-green/55 rounded-lg px-4 py-2 hover:bg-cerulean/25 my-4 transition"
        disabled={isPending || isConfirming}
        onClick={mintNft}
      >
        {isPending ? (
          <div>
            <i className="fa-solid fa-spinner text-blue-green/55 animate-spin mr-2"></i>
            Confirming...
          </div>
        ) : isConfirming ? (
          <div>
            <i className="fa-solid fa-spinner text-blue-green/55 animate-spin mr-2"></i>
            Waiting...
          </div>
        ) : (
          "Mint"
        )}
      </button>

      {isConfirmed && (
        <div className='my-4'>
          Successfully minted your NFT!
          <div className="my-4">
            {/* The UserOp receipt contains the final transaction hash */}
            <a
              href={`https://base-sepolia.blockscout.com/tx/${finalTxHash}`}
              className="text-cerulean hover:text-blue-green underline transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Blockscout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mint;
