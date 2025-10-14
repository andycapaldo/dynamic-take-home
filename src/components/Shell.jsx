import { DynamicWidget, DynamicEmbeddedWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Link } from "react-router-dom";

const Shell = ({ children }) => {
  const { user }  = useDynamicContext();

  return (
    <div className="min-h-screen bg-raisin-black text-bone">
      <div className="max-w-6xl mx-auto p-6">
        <nav className="flex items-center justify-between max-w-4xl mx-auto">
          <Link to='/' className="text-3xl font-semibold font-playfair">Dynamic Demo</Link>
          <Link to='/mint'  className="text-lg font-medium font-lato border border-blue-green/55 rounded-lg px-4 py-2 hover:bg-blue-green/10 transition">Mint</Link>
          <DynamicWidget />
        </nav>
        <main className="mt-12 max-w-2xl flex flex-col mx-auto">
          <div className="rounded-2xl p-6 bg-cerulean/20 border border-blue-green/55 shadow-xl font-lato mb-8">
            {children}
          </div>
          {
            user && <div className="mt-8 w-full">
                <DynamicEmbeddedWidget background="default" className="mb-8 w-full" />
              </div>
          }
        </main>
      </div>
    </div>
  );
};

export default Shell;
