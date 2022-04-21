import { Link } from "react-router-dom";
import logo from "../../assets/images/newlogo.svg";
import twitterIcon from "../../assets/images/twitter_icon.png";
import discordIcon from "../../assets/images/discord_icons.png";
import socialIcon from "../../assets/images/social icon.png";

export const Header = (props) => {
  const { metamaskConnected, account, setMetamaskConnnected } = props;

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      setMetamaskConnnected(true);
      window.location.reload();
    }
  };

  return (
    <header id="header">
      <div className="intro mint-intro-back">
        <div className="logo">
          <Link to="/" rel="nofollow">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="navbar">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitterIcon}
              className="social-icons purple"
              alt="twitterIcon"
            ></img>
          </a>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer">
            <img
              src={discordIcon}
              className="social-icons purple"
              alt="discordIcon"
            ></img>
          </a>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={socialIcon}
              className="social-icons purple"
              alt="socialIcon"
            ></img>
          </a>
          {account ? (
            <div className="blue-address">
              {account &&
                `${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )}`}
            </div>
          ) : (
            // <ConnectWalletButton></ConnectWalletButton>
            <button
              className="btn btn-wallet btn-lg page-scroll"
              onClick={handleConnectWallet}
            >
              CONNECT WALLET
            </button>
          )}
          {/* <div className="header-btn">
            <Link
              to="/collectibles"
              rel="nofollow"
              className="btn btn-member btn-lg page-scroll"
            >
              M9E MEMBERS
            </Link>
          </div> */}
        </div>
        <div className="intro-title">
          <div className="container">
            <h1>
              WELCOME TO DCAPSUL<span>Ξ</span> MINT PAGE
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
