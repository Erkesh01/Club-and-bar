import React, { useState } from "react";
import './section1.css';
import img1 from './img/img1.png';

export default function Section1() {
    const [showTexts, setShowTexts] = useState([true, true]);
  
    const handleMoreClick = (index) => {
      setShowTexts(prevShowTexts => {
        const newShowTexts = [...prevShowTexts];
        newShowTexts[index] = !newShowTexts[index];
        return newShowTexts;
      });
    };
  
    return (
      <div className="all-section1">
        <div className="section1-event">
          <h2>Top “Manhattan” events</h2>
          <h1>Банкеты</h1>
          <p>Quam massa pretium et venenatis. Fringilla <br /> sagittis, arcu massa, in sem viverra consequat. <br /> Tempus sed est interdum eget nisi, nec fames. <br /> Eget amet hac varius aliquam. Mattis egestas <br /> suspendisse convallis eu arcu et aliquet.</p>
          {showTexts[0] && (
            <>
              <p>Porttitor risus sociis vitae nunc id lacus eget felis. <br /> Viverra et purus nibh ut. Sed ac leo sit posuere <br /> vulputate sed morbi. Donec gravida at turpis sed <br /> pulvinar. A nibh non consectetur morbi in arcu, in <br /> pellentesque mauris. </p>
              <p>Eu sodales netus faucibus interdum interdum <br /> platea massa egestas. Facilisis donec gravida <br /> pretium diam semper at id eleifend.</p>
            </>
          )}
          <button onClick={() => handleMoreClick(0)}>Подробнее</button>
        </div>
        <div className="section1-img">
          <img src={img1} alt="Event" />
        </div>
        <div className="section1-event">
          <h2>Top “Manhattan” tourists</h2>
          <h1>Туристы</h1>
          <p>Quam massa pretium et venenatis. Fringilla <br /> sagittis, arcu massa, in sem viverra consequat. <br /> Tempus sed est interdum eget nisi, nec fames. <br /> Eget amet hac varius aliquam. Mattis egestas <br /> suspendisse convallis eu arcu et aliquet.</p>
          {showTexts[1] && (
            <>
              <p>Porttitor risus sociis vitae nunc id lacus eget felis. <br /> Viverra et purus nibh ut. Sed ac leo sit posuere <br /> vulputate sed morbi. Donec gravida at turpis sed <br /> pulvinar. A nibh non consectetur morbi in arcu, in <br /> pellentesque mauris. </p>
              <p>Eu sodales netus faucibus interdum interdum <br /> platea massa egestas. Facilisis donec gravida <br /> pretium diam semper at id eleifend.</p>
            </>
          )}
          <button onClick={() => handleMoreClick(1)}>Подробнее</button>
        </div>
      </div>
    );
  }
  
  
  