import React from "react";
import "./KitchenProps.css";

const KitchenProps = ({ img, price, weight, desc }) => {
  return (
    <div className="kitchenprops">
      <div className="food_container">
        <img src={img} />
        <div className="food__container__text">
          <div className="food__title">
            <h1>Amet donec.</h1>
            <button>{price} ₽</button>
          </div>
          <div className="weight">{weight} гр</div>
          <div className="description">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default KitchenProps;
