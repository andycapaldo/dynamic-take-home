import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
const App = () => {
  const envID = import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID;

  return (
    <DynamicContextProvider
      settings={{
        environmentId: envID,
        walletConnectors: [EthereumWalletConnectors,SolanaWalletConnectors],
        multiWallet: true,
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  )
}

export default App
