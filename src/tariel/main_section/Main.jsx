import React from "react";
import "./Main.css";
import { assets } from "../assets/data";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="left__main">
          <div className="left__text">
            <button>Since 1996</button>
            <h1>
              True. Fontanka. <br /> Underground.
            </h1>
          </div>
        </div>

        <div className="right__main">
          <div className="right__main__title">
            <div className="title__left">
              <h1>БЛИЖАЙШИЕ</h1>
            </div>
            <div className="title__right">
              <h1>СКОРО</h1>
            </div>
          </div>
          <div className="right__main__img">
              <img src={assets.ph2} />
              <img src={assets.ph3} />
              <img src={assets.ph4} />
              <img src={assets.ph5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
