import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [glowLight, setGlowLight] = useState(null);

  const doesLightGlow = (color) => {
    setGlowLight(prev => (prev === color ? null : color));
  };
 
  return (
    <div>
      <div className="traffic-light-box">
        <div className="traffic-light-pole"></div>

        <div
         className={`red ${glowLight === "red" ? "glow" : ""}`}
         onClick={() => doesLightGlow("red")}
         ></div>

        <div 
        className={`yellow ${glowLight === "yellow" ? "glow" : ""}`}
         onClick={() => doesLightGlow("yellow")}></div>

        <div 
        className={`green ${glowLight === "green" ? "glow" : ""}`}
         onClick={() => doesLightGlow("green")}></div>
      </div>
    </div>
  );
};

export default Home;
