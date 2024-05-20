import React, { useState } from "react";
import './section2.css';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/vk.png';
import img4 from './img/tg.png';
import img5 from './img/icon.png';

export default function Section2() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const handleImageClick = (index) => {
        setVisibleIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const renderList = (index, title) => (
        <ul key={index} className={`list-container ${visibleIndex === index ? 'visible' : ''}`}>
            <h3>
                {title}
                <img src={img5} onClick={() => handleImageClick(index)} />
            </h3>
            {visibleIndex === index && (
                <div className="section2-menu">
                    <li>Acoustic system BELL Top 600W x 2</li>
                    <li>Acoustic system BELL Mid 600W x 2</li>
                    <li>Acoustic system BELL Sub 1000W x 2</li>
                    <li>Front monitor Yamaha SM12V 300w x 2</li>
                    <li>Backside monitor Dynacord 500W x 2</li>
                </div>
            )}
        </ul>
    );
    
    return (
        <div className="all-section2">
            <h2>Top “Manhattan” party</h2>
            <h1>ТЕХРАЙДЕР</h1>
            <div className="all-section2-block">
                <div className="section2-block-left">
                    {renderList(0, "Loudspeakers")}
                    {renderList(1, "Amplifier")}
                    {renderList(2, "FOH")}
                    {renderList(3, "Backline")}
                    {renderList(4, "Microphone set")}
                    {renderList(5, "DJ equipment")}
                </div>
                <div className="section2-block-right">
                    <h4>ЗВУКОРЕЖИССЕРЫ <br /> КЛУБА МАНХЭТТЕН</h4>
                  <div className="section2-block-right-man">
                      <div>
                        <img src={img1} alt="Изотов Константин" style={{width:"196px", height:"210px"}} />
                        <p>Изотов <br />Константин</p>
                        <div className="section2-tg-vk">
                            <a href="https://m.vk.com/wall-128776180_3507639?offset=1&reply=3507987">
                                <img src={img3} className="section2-vk" alt="VK" />
                            </a>
                            <a href="https://t.me/David_Arakhamia/183">
                                <img src={img4} className="section2-tg" alt="Telegram" />
                            </a>
                        </div>
                     </div>
                     <div style={{marginLeft:"20px"}}>
                        <img src={img2} alt="Давид Хозиев" style={{width:"196px", height:"210px",}} />
                        <p>Давид <br /> Хозиев</p>
                        <div className="section2-tg-vk">
                            <a href="https://m.vk.com/wall-128776180_3507639?offset=1&reply=3507987">
                                <img src={img3} className="section2-vk" alt="VK" />
                            </a>
                            <a href="https://t.me/David_Arakhamia/183">
                                <img src={img4} className="section2-tg" alt="Telegram" />
                            </a>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
    );
}
