import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [glowLight, setGlowLight] = useState(null);

  return (
    <div>
      <div className="traffic-light-box">
        <div className="traffic-light-pole"></div>

        <div
         className={`red ${glowLight === "red" ? "glow" : ""}`}
         onClick={() => setGlowLight("red")}
         ></div>

        <div 
        className={`yellow ${glowLight === "yellow" ? "glow" : ""}`}
         onClick={() => setGlowLight("yellow")}></div>

        <div 
        className={`green ${glowLight === "green" ? "glow" : ""}`}
         onClick={() => setGlowLight("green")}></div>
      </div>
    </div>
  );
};

export default Home;
