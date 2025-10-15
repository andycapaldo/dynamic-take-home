import * as faucetService from "../../lib/hooks";

const Faucet = () => {
  const { isLoading, txHash, error, mintTokens } = faucetService.useMint();

  const handleMint = async () => {
    try {
      await mintTokens();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">fUSDC Mint</h2>
      <p className="my-4 text-sm">
        Click the button to receive 100 fake USDC on Base Sepolia
      </p>

      <button
        onClick={handleMint}
        disabled={isLoading}
        className="w-full border border-blue-green/65 shadow-xl bg-blue-green/55 rounded-lg px-4 py-2 hover:bg-cerulean/25 my-4 transition"
      >
        {isLoading ? (
          <div>
            <i className="fa-solid fa-spinner text-blue-green/55 animate-spin mr-2"></i>
            Confirming...
          </div>
        ) : (
          "Get 100 fUSDC"
        )}
      </button>

      {/* Transaction Status */}
      {txHash && (
        <div className="text-green-500">
          <p>Success! You received 100 USDC.</p>
          <a
            href={`https://base-sepolia.blockscout.com/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View on Blockscout
          </a>
        </div>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Faucet;
