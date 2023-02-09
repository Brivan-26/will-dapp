import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  connectWallet,
  getCurrentWalletConnected,
  walletListener,
} from "./ethereum/metamask";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setSigner, setContract);
    walletListener(setWalletAddress);
  }, []);
  return (
    <>
      {!walletAddress ? (
        <Login
          setWalletAddress={setWalletAddress}
          setSigner={setSigner}
          setContract={setContract}
        />
      ) : (
        <Dashboard
          walletAddress={walletAddress}
          signer={signer}
          contract={contract}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
