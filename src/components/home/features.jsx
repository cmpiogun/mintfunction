import { useState, useLayoutEffect } from "react";
import silhouette from "../../assets/images/j1.png";
import silhouette1 from "../../assets/images/t1.png";
import silhouette2 from "../../assets/images/j2.png";
import silhouette3 from "../../assets/images/t2.png";
import silhouette4 from "../../assets/images/j3.png";
import silhouette5 from "../../assets/images/t3.png";
import nine from "../../assets/images/9x999.png";
import View from "../view_image";

import React, { Component } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const Features = (props) => {
  const [width, height] = useWindowSize();

  return (
    <div id="features" className="text-center">
      { <div className="container">
        <div>
            <img src={silhouette2} className="silhouette" alt="silhouette"></img>
            <img src={silhouette3} className="silhouette" alt="silhouette"></img>

          <p className="mini">FIRST COLLECTIONS OF SIVANA HOODIE, SHIRT AND SNEAKER </p>
          {/* <img src={nine} className="nine" alt="nine"></img> */}
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6">
                <p className="justify nine-comment"> // SIVANA DCAPSULE </p>
                <p className="justify description">
                We have decided that we will market the collection as a complete 4-piece set, offering three 
                colours for each element, being Black Beauty, Sharkskin Grey and Cannolo Cream. Buyers will 
                be able to select which colour they want in each element, so there will be 12 items with 81
                possible combinations to choose from. However, we will be allowing only 1,000 of each 
                element to be minted which means that if, for example, out of the first 1,500 
                applications, 1,000 all want the Black Beauty hoodie, any further applications will only be able 
                to choose one of the other colours. This effectively limits the total number of sets to 3,000 as a maximum.
                </p>
              </div>
              <div className="col-lg-6">
                <p className="justify nine-collection">A COLLECTION OF</p>
                <p className="justify nine-unique">3000 FASHION NFTs</p>
                <p className="justify2 description">
                We will allow original buyers to forge an additional set for each DCapsule they hold at 0.1 ETH. 
                We will also allow secondary buyers to also forge their own IRL set at the 
                same price, adding to the secondary market appeal. 
                In common with all of our projects, all NFT holders will be granted commercial and derivative 
                rights to use the NFT in whatever way they choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> }
      {/* <div id="carousel">{width < 768 ? <ViewResponse /> : <View />}</div> */}
    </div>
  );
};
