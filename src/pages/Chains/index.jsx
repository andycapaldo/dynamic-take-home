import {
  useSwitchWallet,
  useUserWallets,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";

const Chains = () => {
  const { primaryWallet } = useDynamicContext();
  const switchWallet = useSwitchWallet();
  const userWallets = useUserWallets();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Multi-Chain Coverage</h2>
      {primaryWallet && (
        <div className="my-4 p-2 border border-blue-green/65 rounded-lg">
          Currently connected to:{" "}
          <span className="font-bold text-blue-green">{'EVM' === primaryWallet.chain ? 'Base Sepolia' : 'Solana Devnet'}</span>
        </div>
      )}
      <div className="text-sm">
        <p className="my-4">
          Dynamic supports more chains and wallets than any other wallet
          provider, empowering developers to craft tailored experiences that
          cater to the specific needs of their users.
        </p>
        <p className="my-4">
          Dynamic's multi-chain wallet adapter supports hundreds of wallets
          across all EVM networks, SVM networks, Bitcoin, Cosmos, and more. The
          wallet login is unified, saving your end-users time and effort.
        </p>
        <p className="my-4">
          Developers can seamlessly integrate multiple wallets and chains into
          their applications, eliminating the need for complex, chain-specific
          implementations. This flexibility allows developers to reach a broader
          audience and provide a more inclusive user experience.
        </p>
        <p className="my-4">
          This app has two chains enabled: Base Sepolia and Solana Devnet. You
          can switch between them by selecting your other wallet in the Dynamic
          widget. <span className="font-bold text-blue-green">Or, switch to them via the buttons below and see the change in
          your wallet!</span>
        </p>
      </div>
      <div className="flex gap-4 mt-6">
        {userWallets.map((wallet) => (
          <button key={wallet.id} onClick={() => switchWallet(wallet.id)} className='border border-blue-green/65 shadow-xl bg-blue-green/55 rounded-lg px-4 py-2 hover:bg-cerulean/25 my-4 transition'>
            {'EVM' === wallet.chain ? 'Switch to Base Sepolia' : 'SOL' === wallet.chain ? 'Switch to Solana Devnet' : `Switch to ${wallet.chain}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chains;
