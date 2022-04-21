import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import mint from "../../assets/images/mint.png";
import ReactLoading from "react-loading";
import { onGetMintData, setHistory } from "../../redux/actions/mint";
import CounterInput from "react-bootstrap-counter";
import { mintNft } from "../../web3/web3";
import Modal from "react-modal";
import logo from "../../assets/images/newlogo.svg";
import swal from "sweetalert";

export const MintSection = (props) => {
  const dispatch = useDispatch();
  const { preLoading, setPreLoading, account, metamaskConnected } = props;
  const mintable = useSelector((state) => state.mint);
  const [selectedCount, setSelectedCount] = useState(1);
  const [mintLoading, setMintLoading] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [networkId, setNetworkId] = useState();

  useEffect(async () => {
    if(metamaskConnected){
      const web3 = window.web3;
      const networkId = await web3.eth.net.getId();
      setNetworkId(networkId);
      window.ethereum.on("networkChanged", (networkId) => {
        setNetworkId(networkId);
      });
    }
  });

  useEffect(async () => {
    if (mintable.count || mintable.failedMsg) {
      setPreLoading(false);
    }
    if (mintable.failedMsg) {
      setMintLoading(false);
    }
    if (mintable.mintData.success == true) {
      const price = mintable.mintData.price;
      const tokenAmount = mintable.mintData.tokenAmount;
      const timestamp = mintable.mintData.timestamp;
      const signature = mintable.mintData.signature;
      await mintNft(price, tokenAmount, timestamp, signature, account).then(
        (data) => {
          console.log("data: ", data);
          setMintStatus(data.success);
          if (data.success == false) {
            if (data.type == "estimategas") {
              swal(
                "Sorry",
                `Insufficient funds to mint. Please consider the price ${mintable.mintData.price}Eth, and some gas fee!`,
                "warning"
              );
            } else if (data.type == "mint") {
              swal("Sorry", "Error happened while processing, please try again later", "warning");
            }
          }
          setMintLoading(false);
        }
      );
    } else {
      setMintLoading(false);
    }
  }, [mintable]);

  useEffect(() => {
    if (mintStatus) {
      console.log('historyId', mintable.mintData.historyId);
      dispatch(setHistory({address: account, historyId: mintable.mintData.historyId}))
      setViewModal(true);
    }
  }, [mintStatus]);

  const handleMint = () => {
    setMintLoading(true);
    dispatch(onGetMintData({ address: account, count: selectedCount }));
  };

  const handleClose = () => {
    setViewModal(false);
  };

  return (
    <>
      <div id="mint" className="text-center">
        <div className="container">
          {preLoading ? (
            <div className="d-inline-block">
              <ReactLoading
                type="spin"
                color="#0affff"
                height={120}
                width={120}
              />
            </div>
          ) : (
            <>
              {mintStatus ? (
                <>
                  <div className="mint-failedMsg">
                    <h1>CONGRATULATION!</h1>
                    <p>YOU HAVE SUCCESSFULLY MINT YOUR DCAPSULΞ !</p>
                  </div>
                  <div>
                    <div style={{ marginTop: "70px" }}>
                      <a
                        className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
                        href="https://opensea.io/collection/master9eyes"
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW ON OPENSEA
                        <img
                          src={mint}
                          className="btn-script"
                          alt="mint-script"
                        ></img>
                      </a>{" "}
                      <a
                        className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
                        href="https://twitter.com/compose/tweet"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SHARE ON TWITTER
                        <img
                          src={mint}
                          className="btn-script"
                          alt="mint-script"
                        ></img>
                      </a>{" "}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {mintable.count && (
                    <div>
                      <div className="mint-header">
                        <h1>
                          MINT YOUR DCAPSULE<span>Ξ</span>
                        </h1>
                      </div>
                      <p className="mint-subtitle">(MINT MAX 3/WALLET // MINT PRICE: 0.1ETH)</p>
                      <CounterInput
                        value={1}
                        min={1}
                        max={mintable.count}
                        onChange={(value) => {
                          setSelectedCount(value);
                        }}
                      />
                      {mintLoading ? (
                        <div className="d-inline-block">
                          <ReactLoading type="spin" color="#0affff" />
                        </div>
                      ) : (
                        <div className="mint text-center">
                          <button
                            className="btn btn-mint btn-lg page-scroll"
                            onClick={handleMint}
                          >
                            MINT
                            <img
                              src={mint}
                              className="mint-script"
                              alt="mint-script"
                            ></img>
                          </button>{" "}
                          <br />
                        </div>
                      )}
                    </div>
                  )}
                  {mintable.failedMsg && (
                    <>
                      <div className="mint-failedMsg">
                        <h1>{mintable.failedMsg}</h1>
                      </div>
                      {mintable.minted && (
                        <div>
                          <div style={{ marginTop: "70px" }}>
                            <a
                              className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
                              href="https://opensea.io/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              VIEW ON OPENSEA
                              <img
                                src={mint}
                                className="btn-script"
                                alt="mint-script"
                              ></img>
                            </a>{" "}
                            <a
                              className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
                              href="https://twitter.com/compose/tweet"
                              target="_blank"
                              rel="noreferrer"
                            >
                              SHARE ON TWITTER
                              <img
                                src={mint}
                                className="btn-script"
                                alt="mint-script"
                              ></img>
                            </a>{" "}
                          </div>
                        </div>
                      )}
                      {mintable.soldout && (
                        <div>
                          <div style={{ marginTop: "70px" }}>
                            <a
                              className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
                              href="https://opensea.io/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              VIEW ON OPENSEA
                              <img
                                src={mint}
                                className="btn-script"
                                alt="mint-script"
                              ></img>
                            </a>{" "}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {!mintable.count && !mintable.failedMsg && (
                    <div className="mint-failedMsg">
                      <h1>Please connect wallet</h1>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={viewModal}
        onRequestClose={handleClose}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <div className="mint-logo">
          <Link to="/" rel="nofollow">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="close">
          <i className="fa close-icon" onClick={handleClose}>
            &#xf00d;
          </i>
        </div>
        <div className="success-msg">
          <h1>CONGRATULATION!</h1>
          <p>YOU HAVE SUCCESSFULLY MINT YOUR DCAPSULΞ !</p>
        </div>
        <div style={{ marginTop: "8vh" }}>
          <a
            className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
            href="https://opensea.io/collection/master9eyes"
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON OPENSEA
            <img src={mint} className="btn-script" alt="mint-script"></img>
          </a>{" "}
          <a
            className="btn btn-modal btn-lg page-scroll mx-5 mt-5"
            href="https://twitter.com/compose/tweet"
            target="_blank"
            rel="noreferrer"
          >
            SHARE ON TWITTER
            <img src={mint} className="btn-script" alt="mint-script"></img>
          </a>{" "}
          <br />
        </div>
      </Modal>
    </>
  );
};
