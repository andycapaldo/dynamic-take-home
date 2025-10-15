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
    <div className='p-4 border rounded-lg space-y-4'>
      <h2 className='text-xl font-bold'>USDC Faucet</h2>
      <p className='text-sm text-gray-500'>
        Click the button to receive 100 fake USDC on Base Sepolia.
        <br />
        <strong>Note:</strong> This faucet will only work if your current fake USDC balance is zero.
      </p>

      <button
        onClick={handleMint}
        disabled={isLoading}
        className='w-full p-2 bg-green-500 text-white rounded disabled:bg-gray-400'
      >
        {isLoading ? 'Waiting for confirmation...' : 'Get 100 Fake USDC'}
      </button>

      {/* Transaction Status */}
      {txHash && (
        <div className='text-green-500'>
          <p>Success! You received 100 USDC.</p>
          <a
            href={`https://base-sepolia.blockscout.com/tx/${txHash}`}
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            View on Blockscout
          </a>
        </div>
      )}
      {error && <p className='text-red-500'>Error: {error}</p>}
    </div>
  );
};

export default Faucet;