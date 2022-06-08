import React from "react";
import CarouselBox from "../carousel/CarouselBox";
import LangMenu from "../langMenu/LangMenu";
import NavMenu from "../navMenu/NavMenu";
import Search from "../search/Search";
import "./Header.scss";

const Header = ({ data, handleLang, handleLangs}) => {
    return (
        <header className="header">
            <div className="header-wrap container">
                <span className="logo"></span>
                <NavMenu dataMenu={data.data.menu} />
                <Search data={data} />
                <LangMenu
                    data={data}
                    handleLang={handleLang}
                    handleLangs={handleLangs}
                />
            </div>
            <CarouselBox data={data} />
        </header>
    );
};

export default Header;
