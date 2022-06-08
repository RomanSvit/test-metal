import React from "react";
import "./NavMenu.scss";

const ids = require("short-id");

const NavMenu = ({ dataMenu }) => {
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const handleActiveMenu = (index) => {
        setActiveItemIndex(index);
    };

    return (
        <nav className="block-menu">
            <ul className="menu">
                {dataMenu.map((item, idx) => {
                    return (
                        <li
                            key={ids.generate()}
                            className={
                                activeItemIndex === idx
                                    ? "menu-item active-item"
                                    : "menu-item "
                            }
                            onClick={() => handleActiveMenu(idx)}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
