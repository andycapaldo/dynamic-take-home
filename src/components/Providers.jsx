import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiProvider } from "wagmi";
import { http } from 'viem';
import { baseSepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const zeroDevProjectId = import.meta.env.VITE_ZERODEV_PROJECT_ID;

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [baseSepolia.id]: http(`https://rpc.zerodev.app/api/v2/bundler/${zeroDevProjectId}`),
  },
});


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
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector config={wagmiConfig}>
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

export default Providers;
