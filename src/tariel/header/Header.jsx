import "./Header.css";
import { assets } from "../assets/data";
import { useRef } from "react";

const Header = () => {
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__img" src={assets.icon1} />
        <img className="nav__dropdown" onClick={dropdown_toggle} src={assets.icon5} />
        <ul ref={menuRef} className="nav__menu">
          <li>Главная</li>
          <li>Меню</li>
          <li>Афиша</li>
          <li>Сотрудничество</li>
          <li>Галерея</li>
          <li>Новости</li>
        </ul>
        <button className="header__btn">БРОНИРОВАНИЕ</button>
      </div>
    </div>
  );
};

export default Header;
