import { SubFooter } from "./sub-footer";
import arrow from "../assets/images/arrow.png";

export const Footer = (props) => {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <h1>
            THE
            TEAM
          </h1>
          <div className="team">
            <div className="row">
            <div className="col-md-3">
                <a href="https://www.linkedin.com/in/nicholas-buchanan-656683185/" target="_blank" rel="noreferrer">
                  <div className="data-list art">
                    <div className="footer-title">
                      <p>
                        <span>PROJECT LEADER</span>
                        <br /> NICK
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <div className="data-list art">
                    <div className="footer-title">
                      <p>
                        <span>ARTIST</span>
                        <br /> NANCY
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://www.linkedin.com/in/adeel-deol-4a5798bb/" target="_blank" rel="noreferrer">
                  <div className="data-list project">
                    <div className="footer-title">
                      <p>
                        <span>DESIGNER</span>
                        <br /> ADEEL
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://www.linkedin.com/in/james-edafioka/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="data-list development">
                    <div className="footer-title">
                      <p>
                        <span>DESIGNER</span>
                        <br /> JAMES
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://www.linkedin.com/in/anthony-ibegbulem-b62275171/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="data-list trade">
                    <div className="footer-title">
                      <p>
                        <span>DESIGNER</span>
                        <br /> ANTHONY
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://www.linkedin.com/in/jin-shan-zhang-a19a70135/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="data-list sale">
                    <div className="footer-title">
                      <p>
                        <span>DESIGNER</span>
                        <br /> JIN
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://www.linkedin.com/in/ikechukwu-ogunwa-a6a501139/" target="_blank" rel="noreferrer">
                  <div className="data-list design">
                    <div className="footer-title">
                      <p>
                        <span>DEVELOPER</span>
                        <br /> IKECHUKWU
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="https://www.linkedin.com/in/araya-masami-02a604225/" target="_blank" rel="noreferrer">
                  <div className="data-list market">
                    <div className="footer-title">
                      <p>
                        <span>DEVELOPER</span>
                        <br /> ARAYA
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
};
