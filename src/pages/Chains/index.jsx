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
      <h2 className="text-2xl font-bold">Multi-Chain Coverage</h2>
      {primaryWallet && (
        <div className="my-4 p-2 border border-blue-green/65 rounded-lg">
          Currently connected to:{" "}
          <span className="font-bold text-blue-green">
            {"EVM" === primaryWallet.chain ? "Base Sepolia" : "Solana Devnet"}
          </span>
        </div>
      )}
      <div className="">
        <p className="my-4">
          Dynamic supports a wide range of chains and wallets, enabling
          developers to craft experiences tailored to their users.
        </p>
        <p className="my-4">
          Dynamic's multi-chain wallet adapter works across EVM networks, Solana
          (SVM), Bitcoin, Cosmos, and more. Login is unified, reducing friction
          for end users.
        </p>
        <p className="my-4">
          You can integrate multiple wallets and chains without maintaining
          complex, chain-specific code. This flexibility helps you reach a
          broader audience with a consistent UX.
        </p>
        <p className="my-4">
          This demo enables{" "}
          <span className="text-blue-green font-bold">Base Sepolia</span> and{" "}
          <span className="text-blue-green font-bold">Solana Devnet.</span> Switch between them by selecting your other wallet in the Dynamic
          widget,{" "}
          <span className="font-bold text-blue-green">
            or switch to them via the buttons below and see the change in your
            wallet!
          </span>
        </p>
      </div>
      <div className="flex gap-4 mt-6">
        {userWallets.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => switchWallet(wallet.id)}
            className="border border-blue-green/65 shadow-xl bg-blue-green/55 rounded-lg px-4 py-2 hover:bg-cerulean/25 my-4 transition"
          >
            {"EVM" === wallet.chain
              ? "Switch to Base Sepolia"
              : "SOL" === wallet.chain
              ? "Switch to Solana Devnet"
              : `Switch to ${wallet.chain}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chains;
