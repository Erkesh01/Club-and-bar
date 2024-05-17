import React from "react";
import "./Kitchen.css";
import "./KitchenProps.jsx";
import { assets, product } from "../assets/data.jsx";
import KitchenProps from "./KitchenProps.jsx";

const Kitchen = () => {
  return (
    <div className="kitchen">
      <h2>Top “Manhattan” menu</h2>
      <h1>Кухня</h1>
      <div className="kitchen__container">
        <button className="arrow"><img src={assets.icon2}/></button>
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
        <button className="arrow"><img src={assets.icon3}/></button>
      </div>
      <button className="btn__menu">все меню</button>
    </div>
  );
};

export default Kitchen;
