import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Shell = ({ children }) => {
  return (
    <div className="min-h-screen bg-raisin-black text-bone">
      <div className="max-w-2xl mx-auto p-6">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold font-playfair">Dynamic Demo</h1>
          <DynamicWidget />
        </header>
        <main className="mt-8">
          <div className="rounded-2xl p-6 bg-cerulean/20 border border-blue-green/55 shadow-xl font-lato">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shell;
