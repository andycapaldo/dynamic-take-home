const Security = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Security Overview</h2>
      <div className="">
        <p className="my-4">
          Dynamic's embedded wallets secure user funds and by default. With{" "}
          <span className="text-blue-green font-bold">TSS-MPC</span> key
          management, a wallet's private key is never held in one place or
          reconstructed as a single key.
        </p>
        <p className="my-4">
          Instead, key material is split into multiple{" "}
          <span className="text-blue-green font-bold">shares</span> across
          different locations. Even during signing, the full key is not
          reconstructed on the backend. Dynamic uses{" "}
          <span className="text-blue-green font-bold">
            Trusted Execution Environments (TEEs)
          </span>{" "}
          for sensitive operations like partial key decryption and signing. This
          removes single points of failure and eliminates seed-phrase handling.
        </p>
        <p className="my-4">
          Think of your wallet like a safety deposit box that needs two keys.
          One key is on your device, protected by your authentication (e.g.,
          password, passkey, or TOTP).
        </p>
        <p className="my-4">
          Dynamic holds the other key on its secure servers. Access requires
          both keys. If a device is lost or a server is compromised, funds
          remain protected because an attacker would need both keys from
          separate, hardened locations.
        </p>
        <p className="my-4">
          Learn more about TSS-MPC and how it works{" "}
          <a
            href="https://www.dynamic.xyz/docs/wallets/embedded-wallets/mpc/overview#secured-by-tss-mpc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-green font-bold hover:text-cerulean underline transition"
          >
            here.
          </a>
        </p>
      </div>
      <h2 className="text-2xl font-bold">Adding MFA</h2>
      <div>
        <p className="my-4">
          Multi-Factor Authentication (MFA) adds an extra layer of security.
          Dynamic supports both{" "}
          <a
            href="https://www.dynamic.xyz/docs/authentication-methods/mfa/account-based"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-green font-bold hover:text-cerulean underline transition"
          >
            account-based MFA
          </a>{" "}
          and{" "}
          <a
            href="https://www.dynamic.xyz/docs/authentication-methods/mfa/action-based"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-green font-bold hover:text-cerulean underline transition"
          >
            action-based MFA
          </a>
        </p>
        <p className="my-4">
          Supported methods include{" "}
          <span className="text-blue-green font-bold">passkeys</span> and{" "}
          <span className="text-blue-green font-bold">TOTP</span> (time-based
          one-time passwords). Both are secure and easy to use, but passkeys are
          generally more user-friendly and phishing-resistant.
        </p>
        <p className="my-4">
          With <span className="text-blue-green font-bold">account-based MFA,</span> users set up MFA for login. You can require
          setup during onboarding or allow users to add it later via the Dynamic
          widget. Session-based MFA can also require re-authentication for each
          new session.
        </p>
        <p className="my-4">
          With <span className="text-blue-green font-bold">action-based MFA,</span> users must verify identity for sensitive
          actions (e.g., sending transactions or minting).
        </p>
        <p className="my-4 text-blue-green font-bold">
          Try adding a passkey or TOTP in the Dynamic widget below to see how easy MFA is to enable!
        </p>
      </div>
    </div>
  );
};

export default Security;
