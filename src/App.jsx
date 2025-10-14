import Providers from "./components/Providers";
import Shell from "./components/Shell";
import HomePage from "./pages/HomePage";
import Mint from "./pages/Mint";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Send from "./pages/Send";

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/send" element={<Send />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </Providers>
  );
};

export default App;
