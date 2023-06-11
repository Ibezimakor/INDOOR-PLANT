import React from "react";
import "./PlantSection.css";
import Tree1 from "../../Images/Tree 01.png";
import Tree2 from "../../Images/Tree 02.png";
import Tree3 from "../../Images/Tree 03.png";

export default function PlantSection() {
  return (
    <main>
      <div className="PlantSection_Box">
        <div className="PlantSection">
          <div className="PlantSection_img1">
            <img src={Tree1} alt="" />
          </div>
          <div className="PlantSection_WriteUp">
            <h3>Big Side Products</h3>
            <h1>
              Plants <br />
              For Interiors
            </h1>
            <h2>SHOP NOW</h2>
          </div>
        </div>
        <div className="PlantSection">
          <div className="PlantSection_img2">
            <img src={Tree2} alt="" />
          </div>
          <div className="PlantSection_WriteUp">
            <h3>Top Products</h3>
            <h1>
              Plants <br /> For Health
            </h1>
            <h2>SHOP NOW</h2>
          </div>
        </div>
        <div className="PlantSection">
          <div className="PlantSection_img3">
            <img src={Tree3} alt="" />
          </div>
          <div className="PlantSection_WriteUp">
            <h3>Trending Now</h3>
            <h1>
              Plants <br /> For Purify
            </h1>
            <h2>SHOP NOW</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
