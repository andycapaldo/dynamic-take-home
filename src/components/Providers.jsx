import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const Providers = ({ children }) => {
  const envID = import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID;
  return (
    <DynamicContextProvider
      theme="dark"
      settings={{
        environmentId: envID,
        walletConnectors: [
          EthereumWalletConnectors,
          SolanaWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
        multiWallet: true,
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};

export default Providers;
