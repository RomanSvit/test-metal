import React from "react";
import LangSelect from "./langSelect/LangSelect";
import "./Header.scss";
import NavDesck from "./navDesck/NavDesck";
import HeaderBanner from "./headerBanner/HeaderBanner";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wraper-header-nav">
            <a href="/" className="logo"></a>
            <NavDesck />
            <div className="wrapp">
              <button className="search-btn"></button>
              <LangSelect />
            </div>
          </div>
        </div>
        <HeaderBanner />
      </header>
    </>
  );
};

export default Header;
