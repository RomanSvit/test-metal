import React from "react";
import "./NavDesck.scss";
const NavDesck = () => {
  return (
    <ul className="header-menu">
      <li className="header-menu-item">Главная</li>
      <li className="header-menu-item">
        Услуги
        <button className="services-selected"></button>
      </li>
      <li className="header-menu-item">Наши работы</li>
      <li className="header-menu-item">О нас</li>
      <li className="header-menu-item">Контакты</li>
    </ul>
  );
};

export default NavDesck;
