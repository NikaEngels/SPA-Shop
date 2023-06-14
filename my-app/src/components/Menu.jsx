import React from "react";
import logo from "./image/AppleWatch.png";

const Menu = () => {
  return (
    <div className="Card">
      <div className="Card_content">
        <img
          src={logo}
          alt="Apple Watch Series 5 SE"
          width={160}
          height={200}
        ></img>
        <p>Apple Watch</p>
        <p>Series 5 SE</p>
        <div className="cost">
          <p>529.99$</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
