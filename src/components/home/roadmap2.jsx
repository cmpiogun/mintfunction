import arrow from "../../assets/images/arrow.png";
import triangle from "../../assets/images/triangle2.jpg";
import triangle2 from "../../assets/images/triangle3.jpg";

export const Roadmap2 = (props) => {
  return (
    <div id="roadmap" className="text-center">
      <div className="container">
        <div className="collection2">
          <h1 className="r-header">MEET OUR DCAPSULE COLLECTION</h1>
          <p>3000 @ 0.3Ξ AVAILABLE BY 30/04</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XknX9OLUnA4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="video"
          ></iframe>
        </div>
        <div className="roadmap2021">
          <h1>
            ROADMAP
          </h1>
          <div className="roadmap2021-main">
            <div className="point-1">
              <div className="gradiant"></div>
              <div className="absolute1">
                <img src={triangle2} alt="triangle2"></img>
                <h2>Q1/22</h2>
              </div>
              <div className="absolute2">
                <img src={triangle2} alt="triangle2"></img>
                <h2>Q2/22</h2>
              </div>
              <div className="absolute3">
                <h3>DCAPSULΞ PRE-LAUNCH</h3>
                <p style={{ margin: 0 }}>3000 @ 0.3Ξ</p>
              </div>
            </div>
            <div className="point-4">
              <img src={triangle} alt="triangle"></img>
              <h2>Q2/22</h2>
              <h3>DCAPSULΞ LAUNCH</h3>
              <p style={{ margin: 0 }}>MINT OPEN</p>
            </div>
            <div className="point-5">
              <img src={triangle} alt="triangle"></img>
              <h2>Q3/22</h2>
              <h3>TO BE </h3>
              <h3 style={{ margin: 0 }}>CONTINUED</h3>
            </div>
          </div>
        </div>
        <div className="roadmap2022">
          <div className="roadmap2022-h">
            <h1>
              2023
            </h1>
            <p>
              <span>AND AFTER</span>
            </p>
          </div>
          <div className="roadmap2022-main">
            <div className="point-0">
              <img src={triangle2} alt="triangle"></img>
              <h2>Q1/23</h2>
              <h3>TO BE CONTINUED</h3>
              <h3 style={{ margin: 0 }}>TO BE CONTINUED</h3>
            </div>
            <div className="point-1">
              <img src={triangle} alt="triangle"></img>
              <h2>Q2/23</h2>
              <h3>TO BE CONTINUED</h3>
              <h3 style={{ margin: 0 }}>TO BE CONTINUED</h3>
              <div className="group1">
                <div className="content">
                  <h4>TO BE CONTINUED</h4>
                </div>
              </div>
              <div className="group2">
                <div className="content">
                  <h4>TO BE CONTINUED</h4>
                  <h4>TO BE CONTINUED</h4>
                </div>
              </div>
            </div>
            <div className="point-2">
              <img src={triangle} alt="triangle"></img>
              <h2>Q3/23</h2>
              <h3>TO BE CONTINUED</h3>
              <h3 style={{ margin: 0 }}>TO BE CONTINUED</h3>
              <div className="group3">
                <p>*To be continued</p>
              </div>
            </div>
            <div className="point-3">
              <img src={triangle} alt="triangle"></img>
              <h2>Q4/23</h2>
              <h3>TO BE CONTINUED</h3>
              <div className="group1">
                <div className="content">
                  <h4>TO BE CONTINUED</h4>
                </div>
              </div>
              <div className="group2">
                <div className="content">
                  <h4>To be continued*</h4>
                </div>
              </div>
              <div className="group2">
                <div className="content">
                  <h4>TO BE CONTINUED</h4>
                </div>
              </div>
              <div className="group3">
                <p>*To be continued</p>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap-b">
          <div className="row">
            <div className="roadmap-b-left col-md-6">
              <h1>
                AND MORE
              </h1>
              <h1>TO BUILD</h1>
            </div>
            <div className="roadmap-b-right col-md-6">
              <p>DCAPLABS X METACADET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
