import { connectWallet } from "../ethereum/metamask";
const Login = ({ setWalletAddress, setSigner, setContract }) => {
  const connect = () => {
    connectWallet(setWalletAddress, setSigner, setContract)
  };
  return (
    <div className="h-screen flex items-center justify-center bg-[#03001C]">
      <div>
        <button
          onClick={connect}
          className="py-3 px-4 text-xl rounded bg-[#5B8FB9] text-white font-semibold hover:bg-[#301E67] transition-all duration-500"
        >
          Connect with Metamask
        </button>
      </div>
    </div>
  );
};

export default Login;
