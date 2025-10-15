const Security = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Security Overview</h2>
      <div className="">
        <p className="my-4">
          Dynamic's embedded wallets are designed to secure user funds and
          assets by default. Utilizing{" "}
          <span className="text-blue-green">TSS-MPC</span> key management, the
          core concept to understand is that the "master key" to a wallet is
          never fully stored in one place.
        </p>
        <p className="my-4">
          Instead, the key is split into multiple "shares" that are distributed
          across different locations. Even when a user is signing transactions,
          the full key is not reconstructed in the backend. Dynamic uses{" "}
          <span className="text-blue-green">
            Trusted Execution Environments (TEEs)
          </span>{" "}
          where sensitive operations like key decryption and signing occur. This
          ensures that there is no single point of failure, in addition to
          removing the need for storing seed phrases.
        </p>
        <p className="my-4">
          Your wallet is secured like a bank's safety deposit box that requires
          two keys to open. You have one key for every embedded wallet you own,
          which is securely stored on your device and protected by your own
          authentication measures (i.e. passkey, passcode, TOTP).
        </p>
        <p className="my-4">
          Dynamic holds the other key on it's secure servers. To access your
          funds, both keys are required. This means that if you lose your phone
          or a hacker were to breach a server, your funds remain safe because a
          thief would need to steal both keys from two different, highly secure
          locations.
        </p>
        <p className="my-4">
          You can learn more about TSS-MPC and how it works{" "}
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
          Multi-Factor Authentication (MFA) adds an additional layer of security
          to your app. Dynamic offers both{" "}
          <a
            href="https://www.dynamic.xyz/docs/authentication-methods/mfa/account-based"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-green font-bold hover:text-cerulean underline transition"
          >
            account-based MFA
          </a>
          {" "}as well as{" "}
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
          Dynamic supports two types of MFA:{" "}
          <span className="text-blue-green font-bold">passkeys</span> and{" "}
          <span className="text-blue-green font-bold">TOTP</span> (time-based
          one-time passwords). Both methods are secure and easy to use, but
          passkeys are generally considered more user-friendly and
          phishing-resistant.
        </p>
        <p className='my-4'>
          Account-based MFA allows users to set up their own MFA methods, which
          they can then use to secure their logins. With Dynamic, you can force
          users to setup an MFA method while onboarding, or you can allow them to
          set it up later via the user settings in the Dynamic widget. Dynamic
          also offers session-based MFA, which requires users to re-authenticate
          with MFA for every new session.
        </p>
        <p className='my-4'>
          Action-based MFA enables you to require users to 
          verify their identity for sensistive actions like making transactions.
        </p>
        <p className="my-4 text-blue-green">
            To see how easy it is to add an MFA method with Dynamic, try setting up a
            passkey or TOTP in the user settings of the Dynamic widget below!
        </p>
      </div>
    </div>
  );
};

export default Security;
