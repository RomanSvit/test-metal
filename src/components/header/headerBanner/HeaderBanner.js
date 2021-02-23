import React from "react";
import "./HeaderBanner.scss";
const img = {
  path: "/image/Rectangle.png",
};
const HeaderBanner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + img.path + ")" }}
        className="header-Banner"
      >
        <div className="block-description">
          <span className="block-description-text">
            Высокоточное изготовление изделий из металла по чертежам
          </span>
          <span className="line"></span>
        </div>
        <ul className="slider">
          <li className="slider-item"></li>
          <li className="slider-item"></li>
          <li className="slider-item"></li>
          <li className="slider-item"></li>
        </ul>
      </div>
    </>
  );
};

export default HeaderBanner;
