import React from "react";
import "./LangSelect.scss";

const aarrLang = [
  { lang: "/image/flags/Flag_RUS.png", alt: "rusFlag", id: 1 },
  { lang: "/image/flags/Flag_UA.png", alt: "uaFlag", id: 2 },
  { lang: "/image/flags/Flag_UK.png", alt: "ukFlag", id: 3 },
];

const LangSelect = () => {
  return (
    <>
      <div className="wrapper-block-lang">
        <ul className="block-lang">
          {aarrLang.map((elem) => {
            return (
              <li key={elem.id} className="block-lang-item">
                <img
                  src={elem.lang}
                  alt={elem.alt}
                ></img>
              </li>
            );
          })}
        </ul>
        <button
          className="lang-selected-btn"
        ></button>
      </div>
    </>
  );
};

export default LangSelect;
