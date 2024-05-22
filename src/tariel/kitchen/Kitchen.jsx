import React, { useState } from "react";
import "./Kitchen.css";
import "./KitchenProps.jsx";
import { assets, product, product2 } from "../assets/data.jsx";
import KitchenProps from "./KitchenProps.jsx";

const Kitchen = () => {
  const [allMenu, setAllMenu] = useState([true, true]);
  const menuClick = (index) => {
    setAllMenu((eli) => {
      const newAllMenu = [...eli];
      newAllMenu[index] = !newAllMenu[index];
      return newAllMenu;
    });
    // if(menuClick) {
    //   index.target.classList.remove('arrow')
    // }
  };
  return (
    <div className="kitchen">
      <button className="btn__top__menu">Top “Manhattan” menu</button>
      <h1>Кухня</h1>
      <div className="kitchen__container">
        <button className="arrow">
          <img src={assets.icon2} />
        </button>
        <div className="food__block">
          {product.map((e) => {
            return (
              <KitchenProps
                img={e.img}
                price={e.price}
                weight={e.weight}
                desc={e.desc}
              />
            );
          })}
        </div>
        <button className="arrow">
          <img src={assets.icon3} />
        </button>
      </div>
      <div className="food__block2">
        {allMenu[0] &&
          product2.map((e) => {
            return (
              <KitchenProps
                img={e.img}
                price={e.price}
                weight={e.weight}
                desc={e.desc}
              />
            );
          })}
      </div>
      <button onClick={() => menuClick(0)} className="btn__menu" style={{marginTop: '-300px'}}>
        все меню
      </button>
    </div>
  );
};

export default Kitchen;
