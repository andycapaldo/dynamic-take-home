import {
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";

const HomePage = () => {
  const { user, primaryWallet, sdkHasLoaded } = useDynamicContext();
  const userWallets = useUserWallets();
  const embeddedWallets = userWallets.filter(
    (w) => w.connector.isEmbeddedWallet
  );
  const enabledChains = embeddedWallets.map((w) => w.chain);

  const isMfaEnabled = user?.verifiedCredentials.some((credential) =>
    ['passkey', 'totp'].includes(credential.format)
  ) ?? false; 

  return (
    <div>
      {user && primaryWallet && sdkHasLoaded ? (
        <div className="">
          <div>
            Connected as - <span>{user.email}</span>
          </div>
          <div className="text-wrap md:text-nowrap overflow-hidden">
            Wallet Address (<span>{primaryWallet.chain}</span>) -{" "}
            <span>{primaryWallet.address}</span>
          </div>
          <div>
            Chains Enabled -{" "}
            {enabledChains && enabledChains.length > 1 ? (
              enabledChains.map((chain, idx) => <span key={idx}>{chain} </span>)
            ) : (
              <span>{enabledChains[0]}</span>
            )}
            <div>
              MFA Status -{" "}
              {isMfaEnabled ? <span>Enabled</span> : <span>Not Enabled</span>}
            </div>
          </div>
        </div>
      ) : !sdkHasLoaded ? (
        <div className="flex justify-center items-center">
          <i className="fa-solid fa-circle-notch text-blue-green/55 text-2xl animate-spin"></i>
        </div>
      ) : (
        <div>Please Sign-in</div>
      )}
    </div>
  );
};

export default HomePage;
