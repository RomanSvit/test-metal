import React from "react";
import "./LangMenu.scss";

const LangMenu = ({ data, handleLang, handleLangs }) => {
    const { isLang, arrLang } = data;
    return (
        <>
            <div className="wrapper-block-lang">
                <ul
                    className={
                        !isLang ? "block-lang" : "block-lang open-block-lang"
                    }
                >
                    {arrLang.map((elem) => {
                        return (
                            <li key={elem.id} className="block-lang-item">
                                <button
                                    className="lang-btn"
                                    onClick={handleLang}
                                >
                                    <img src={elem.lang} alt={elem.alt}></img>
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className={!isLang ? "close-arrow-btn" : "open-arrow-btn"}
                    onClick={handleLangs}
                ></button>
            </div>
        </>
    );
};

export default LangMenu;
