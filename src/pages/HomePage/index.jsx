import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import CopyableAddress from "../../components/CopyableAddress";
import { Link } from "react-router-dom";

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
              Upon signing in to this app, you have just created two new
              embedded Web3 wallets: one for the{" "}
              <span className="text-blue-green font-bold">
                Base Sepolia testnet
              </span>{" "}
              and one for the{" "}
              <span className="text-blue-green font-bold">Solana Devnet.</span>{" "}
              The widget below this box comes straight from the Dynamic SDK, and
              it shows you all pertinent details of your account and wallets.
              You can also access this widget in a modal by clicking on your
              wallet address in the top right corner.
            </p>
            <p className="my-4">
              This app is{" "}
              <span className="text-blue-green font-bold">gasless</span>,
              meaning you can interact with the blockchain without needing to
              hold any cryptocurrency in your wallet. This is made possible by
              an integration with ZeroDev, a paymaster provider which enables{" "}
              <span className="text-blue-green font-bold">
                account abstraction
              </span>{" "}
              and sponsors gas fees. Learn more in the{" "}
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
              Head to the{" "}
              <Link to="/mint">
                <span className="text-blue-green font-bold">Mint</span>
              </Link>{" "}
              page to mint an NFT in just 2 clicks. No crypto required!
            </p>
            <p className="my-4">
              The{" "}
              <Link to="/send">
                <span className="text-blue-green font-bold">Send</span>
              </Link>{" "}
              page gives you a faucet for free USDC on Base Sepolia. After
              claiming, use the Dynamic widget to send to any address. Again, no
              crypto required!
            </p>
            <p className="my-4">
              The{" "}
              <Link to="/chains">
                <span className="text-blue-green font-bold">Chains</span>
              </Link>{" "}
              page explains Dynamic's multi-chain capabilities and lets you
              switch between the two chains enabled in this demo.
            </p>
            <p className="my-4">
              The{" "}
              <Link to="/security">
                <span className="text-blue-green font-bold">Security</span>
              </Link>{" "}
              page covers Dynamic's robust security architecture, including{" "}
              <span className="text-blue-green">TSS-MPC</span> key management
              and{" "}
              <span className="text-blue-green">
                multi-factor authentication (MFA).
              </span>
            </p>
            <p className="my-4">
              I hope you enjoy exploring the Dynamic SDK! If you have any
              questions, feel free to reach out to me at
              <span className="text-blue-green font-bold">
                {" "}
                andyc@dynamic.xyz.
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
