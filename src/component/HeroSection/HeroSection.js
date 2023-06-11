import React from "react";
import "./HeroSection.css";
import HeroTree from "../../Images/Tree Hero1.png";
export default function HeroSection() {
  return (
    <main>
      <div className="HeroSection_Box">
        <div className="HeroSection_WriteUp">
          <h3>#Ornamental plant</h3>
          <h1>Transform Your Home with Exquisite Greenery</h1>
          <h2>
            Immerse yourself in the lush world of indoor plants and transform
            your living space into a tranquil oasis. Discover an exquisite
            collection of greenery that breathes life into your home, adding a
            touch of elegance and serenity to every corner.
          </h2>
          <div className="HeroSection_Button">
            <button className="btn1">Explore Now</button>
            <button className="btn2">Learn More</button>
          </div>
        </div>
        <div>
          <img src={HeroTree} alt="" />
        </div>
      </div>
    </main>
  );
}
