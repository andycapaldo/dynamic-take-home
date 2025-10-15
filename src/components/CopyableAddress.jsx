import { useState } from "react";

const CopyableAddress = ({ address }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(address);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy address: ", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="inline-flex items-center gap-2 p-1 border rounded-lg cursor-pointer hover:bg-cerulean/55 dark:hover:bg-gray-700"
    >
      <span className="font-mono">
        {`${address.substring(0, 6)}...${address.substring(
          address.length - 4
        )}`}
      </span>

      {isCopied ? (
        <span className="text-green-500">Copied!</span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM-1 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
        </svg>
      )}
    </div>
  );
};

export default CopyableAddress;
