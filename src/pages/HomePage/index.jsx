import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import CopyableAddress from "../../components/CopyableAddress";

const HomePage = () => {
  const { user, primaryWallet, sdkHasLoaded } = useDynamicContext();
  const userWallets = useUserWallets();
  const embeddedWallets = userWallets.filter(
    (w) => w.connector.isEmbeddedWallet
  );
  const enabledChains = embeddedWallets.map((w) => w.chain);

  const isMfaEnabled =
    user?.verifiedCredentials.some((credential) =>
      ["passkey", "totp"].includes(credential.format)
    ) ?? false;

  return (
    <div>
      {user && primaryWallet && sdkHasLoaded ? (
        <div className="p-4">
          <div>
            <h2 className="text-xl font-bold">
              Welcome to the{" "}
              <span className="text-blue-green">Dynamic SDK</span> Demo!
            </h2>
            <p className="my-4">
              Upon signing-in to this app, you have just created two new Web3
              wallets: one for the Base Sepolia Testnet, and one for the Solana
              Devnet. The widget below this box comes straight from the Dynamic
              SDK, and it shows you all pertinent details of your account and
              wallets. You can also access this widget in a modal by clicking on
              your wallet address in the top right corner.
            </p>
            <p className="my-4">
              This app is{" "}
              <span className="text-blue-green font-bold">gasless</span>,
              meaning you can interact with the blockchain without needing to
              hold any cryptocurrency in your wallet. This is made possible by
              an integration with Zerodev, a paymaster provider which enables
              account abstraction and sponsors your gas fees. You can read more
              about this in the{" "}
              <a
                href="https://www.dynamic.xyz/docs/smart-wallets/add-smart-wallets#gas-sponsorship-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-green font-bold hover:text-cerulean underline transition"
              >
                Dynamic documentation.
              </a>
            </p>
            <p className="my-4">
              If you navigate over to the{" "}
              <span className="text-blue-green font-bold">Mint</span> page, you
              can mint an NFT on the Base Sepolia Testnet in just 2 clicks. No
              crypto required!
            </p>
            <p className="my-4">
              The <span className="text-blue-green font-bold">Send</span> page
              provides a faucet for some free USDC on Base Sepolia, which you
              can then send to any address you want. Again, no crypto required!
            </p>
            <p className="my-4">
              The <span className="text-blue-green font-bold">Chains</span> page
              offers some more information about Dynamic's multi-chain
              capabilities, and allows you to switch between the two chains
              enabled in this app. 
            </p>
            <p className="my-4">
              I hope you enjoy testing out the Dynamic SDK! If you have any
              questions, feel free to reach out to me at
              <span className="text-blue-green font-bold">
                {" "}
                andyc@dynamic.xyz
              </span>
            </p>
          </div>
          <div className="p-4 border border-blue-green/65 shadow-xl bg-cerulean/55 rounded-lg flex flex-col mt-6">
            <h2 className="text-xl font-bold text-blue-green">
              Wallet Details
            </h2>
            <div className="p-1">
              Connected as - <span>{user.email}</span>
            </div>
            <div className="p-1">
              Wallet Address (<span>{primaryWallet.chain}</span>) -{" "}
              <CopyableAddress address={primaryWallet.address} />
            </div>
            <div className="p-1">
              Chains Enabled -{" "}
              {enabledChains && enabledChains.length > 1 ? (
                enabledChains.map((chain, idx) => (
                  <span key={idx}>{chain} </span>
                ))
              ) : (
                <span>{enabledChains[0]}</span>
              )}
              <div className="my-2">
                MFA Status -{" "}
                {isMfaEnabled ? <span>Enabled</span> : <span>Not Enabled</span>}
              </div>
            </div>
          </div>
        </div>
      ) : !sdkHasLoaded ? (
        <div className="flex justify-center items-center">
          <i className="fa-solid fa-spinner text-blue-green/55 text-2xl animate-spin"></i>
        </div>
      ) : (
        <div>Please Sign-in</div>
      )}
    </div>
  );
};

export default HomePage;
