import { useMintNft } from '../../lib/hooks/useMintNft';

const Mint = () => {
  const { 
    isPending, 
    isConfirming, 
    isConfirmed, 
    error, 
    finalTxHash, 
    mintNft 
  } = useMintNft();

  const isLoading = isPending || isConfirming;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">NFT Mint</h2>
      <p className="my-4 text-sm">
        Click the button below to mint an NFT (only on Base Sepolia)
      </p>
      <div className="flex justify-center items-center">
        <button
          className="border w-full border-blue-green/65 shadow-xl bg-blue-green/55 rounded-lg px-4 py-2 hover:bg-cerulean/25 my-4 transition"
          disabled={isLoading}
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
      </div>

      {isConfirmed && (
        <div className="my-4">
          Successfully minted your NFT!
          <div className="my-4">
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
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Mint;