import React from "react";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
        <div className="traffic-light-box">
			<div className="traffic-light-pole"></div>
          <div className="red"></div>

          <div className="yellow"></div>

          <div className="green"></div>
      </div>
    </div>
  );
};

export default Home;
