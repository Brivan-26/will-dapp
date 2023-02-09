import willContract from "./willContract";
import { warning, error } from "../utils/alerts";
import { ethers } from "ethers";
export const connectWallet = async (
  setWalletAddress,
  setSigner,
  setWillContract
) => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setSigner(provider.getSigner());
      setWillContract(willContract(provider));
      setWalletAddress(accounts[0]);
    } catch (err) {
      warning(err.message);
    }
  } else {
    error("please install metamask");
  }
};

export const getCurrentWalletConnected = async (
  setWalletAddress,
  setSigner,
  setWillContract
) => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        setSigner(provider.getSigner());
        setWillContract(willContract(provider));
        setWalletAddress(accounts[0]);
      } else {
        warning("Connect to Metamask using the connect button");
      }
    } catch (err) {
      console.log(err.message);
      error(err.message);
    }
  } else {
    error("please install metamask");
  }
};

export const walletListener = async (setWalletAddress) => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      setWalletAddress(accounts[0]);
    });
  } else {
    setWalletAddress("");
    error("Please install MetaMask");
  }
};
