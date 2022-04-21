import twitterIcon from "../assets/images/twitter_icon.png";
import discordIcon from "../assets/images/discord_icons.png";
import socialIcon from "../assets/images/social icon.png";
import { Link } from 'react-router-dom';

export const SubFooter = () => {
    return(
        <div id="sub-footer">
        <div className="container">
          <div className="col-sm-4 footer-1">
            <p>&copy; 2022 DCAPLabs.</p>
            <p>All right reserved</p>
          </div>
          <div className="col-sm-4">
            <div className="footer-2">
              <a href="https://twitter.com/DCap_Labs" target="_blank" rel="noreferrer">
                <img src={twitterIcon} className="social-icons purple" alt="twitterIcon"></img>
              </a>
              <a href="https://discord.com/channels/875112027826323456/875112027826323458" target="_blank" rel="noreferrer">
                <img src={discordIcon} className="social-icons purple" alt="discordIcon"></img>
              </a>
              <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                <img src={socialIcon} className="social-icons purple" alt="socialIcon"></img>
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer-right">
              <div className="footer-3">
                <Link to="/" rel="nofollow">
                  HOME
                </Link>
                <br />
                {/* <Link to="/faq" rel="nofollow">
                  FAQ
                </Link> */}
              </div>
              <div className="footer-4">
                <a href="https://rinkeby.etherscan.io/address/0x027B1e53fa9F1C5F91D35c387649A8d165e30E38" target="_blank" rel="noreferrer">
                  SMART CONTRACT
                </a>
                <br />
                {/* <Link to="/terms" rel="nofollow">
                  TERMS & CONDITIONS
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}