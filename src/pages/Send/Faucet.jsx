import * as faucetService from "../../lib/hooks/faucet";
import CopyableAddress from "./CopyableAddress";

const Faucet = () => {
  const { isLoading, txHash, error, mintTokens } = faucetService.useMint();

  const handleMint = async () => {
    try {
      await mintTokens();
    } catch (e) {
      // Error is already handled in the hook
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">fUSDC Faucet</h2>
      <p className="my-4 text-sm">
        Click the button to receive 100 fake USDC (only on Base Sepolia)
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
        <div>
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
          <div className="mt-4">
            <h2 className="text-xl font-bold">Send a Transaction</h2>
            <p className="my-4 text-wrap">
              Now that you have some (fake) cash to throw around, follow the steps 
              below to send some USDC to another address!
            </p>
            <ol>
                <li className="mb-2">1. Click the "Send" button on the below Dynamic Widget</li>
                <li className="mb-2">2. Select Fake USDC as the asset to send</li>
                <li className="mb-2">3. Enter an amount to send</li>
                <li className="mb-2">4. Enter a recipient address (click to copy a real wallet below!)</li>
                <li className="mb-2">5. Click on the preview transaction button</li>
                <li className="mb-2">6. If everything looks good, click confirm!</li>
            </ol>
            <div>
                <CopyableAddress address="0xd0E90E241DB88d39362e0C3427cd1f53d98aC910"/>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Faucet;
