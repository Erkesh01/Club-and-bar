import React, { useState } from "react";
import "./Main.css";
import { assets } from "../assets/data";

const Main = () => {
  // const [photoVisible, setPhotoVisible] = useState(true);
  // const togglePhotos = () => {
  //   setPhotoVisible(!photoVisible);
  // };

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
              <button>БЛИЖАЙШИЕ</button>
            </div>
            <div className="title__right">
              <button>СКОРО</button>
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

// onClick={togglePhotos}
// style={{
//   backgroundColor: photoVisible
//     ? "transparent"
//     : "rgba(213, 98, 29, 0.1)",
// }}
// style={{ display: photoVisible ? "block" : "none" }}
// className="right__main__img"
{
  /* <div
            style={{ display: photoVisible ? "none" : "block" }}
            className="right__main__img2"
          >
            <img src={assets.ph2} />
            <img src={assets.ph3} />
          </div> */
}
