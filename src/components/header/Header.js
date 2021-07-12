import React from "react";
import LangSelect from "./langSelect/LangSelect";
import "./Header.scss";
import NavDesck from "./navDesck/NavDesck";
import Slider from "./slider/Slider";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wraper-header-nav">
            <span className="logo"></span>
            <NavDesck />
            <div className="wrapp">
              <button className="search-btn"></button>
              <LangSelect />
            </div>
          </div>
        </div>
        
        <Slider />
      </header>
    </>
  );
};

export default Header;
