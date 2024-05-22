import "./Header.css";
import { assets } from "../assets/data";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

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
          <li><NavLink to="/">Главная</NavLink> </li>
          <li><NavLink>Меню</NavLink> </li>
          <li><NavLink>Афиша</NavLink></li>
          <li><NavLink to="/Сотрудничества">Сотрудничество</NavLink></li>
          <li><NavLink>Галерея</NavLink></li>
          <li><NavLink>Новости</NavLink></li>
        </ul>
        <button className="header__btn">БРОНИРОВАНИЕ</button>
      </div>
    </div>
  );
};

export default Header;
