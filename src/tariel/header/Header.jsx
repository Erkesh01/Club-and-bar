import React from "react";
import "./Header.css";
import { assets } from "../assets/data";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__img" src={assets.icon1} />
        <nav>
          <li>Главная</li>
          <li>Меню</li>
          <li>Афиша</li>
          <li>Сотрудничество</li>
          <li>Галерея</li>
          <li>Новости</li>
        </nav>
        <button className="header__btn">БРОНИРОВАНИЕ</button>
      </div>
    </div>
  );
};

export default Header;
