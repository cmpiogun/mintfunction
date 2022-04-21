import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/main";
// import Register from "./pages/register";
import Mint from "./pages/mint";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Web3 from "web3";
import "./App.css";
import swal from "sweetalert";

const App = () => {
  const [metamaskConnected, setMetamaskConnnected] = useState(false);
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [isMetamask, setIsMetamask] = useState(true);

  useEffect(async () => {
    await loadWeb3().then((data) => {
      if (data != false) {
        loadBlockchainData();
      }
    });
  });

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      setIsMetamask(false);
      return false;
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setNetworkId(networkId);

    if (accounts.length == 0) {
      setMetamaskConnnected(false);
    } else {
      setMetamaskConnnected(true);
      setAccount(accounts[0]);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) setAccount(accounts[0]);
      else setAccount();
    });
    window.ethereum.on("networkChanged", (networkId) => {
      setNetworkId(networkId);
    });
  };

  return (
    <Provider store={store}>
      {networkId != 1 && metamaskConnected && (
        <div className="network-err-msg">
          <h1>To use dcapsule, please switch to main network</h1>
        </div>
      )}
      {!isMetamask && (
        <div className="network-err-msg">
          <h1>Non-Ethereum browser detected. You should consider trying MetaMask!</h1>
        </div>
      )}
      <Router>
        <ScrollToTop />
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  metamaskConnected={metamaskConnected}
                  setMetamaskConnnected={setMetamaskConnnected}
                  account={account}
                />
              }
            />
            {/* <Route exact path="/register" element={<Register />} /> */}
            <Route
              exact
              path="/mint"
              element={
                <Mint
                  metamaskConnected={metamaskConnected}
                  setMetamaskConnnected={setMetamaskConnnected}
                  account={account}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
