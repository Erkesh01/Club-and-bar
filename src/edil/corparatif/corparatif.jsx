import React from "react";
import flame from "./img/Frame.png"
import flame2 from "./img/Frame2.png"
import './corparatif.css'

export default function Corparatif(){
    return(
        <>
        <div className="corpatifMain">
            <div className="corparatifText">
                <button>Top “Manhattan” menu</button>
                <h2>корпоративы</h2>
                <h3>корпоративы</h3>
            </div>
            <div className="corparatifWrap">
                <div className="blockOne">
                    <img src={flame} alt="" />
                    <p>Фуршетное меню от 1000 руб. на человека (до 150 человек).</p>
                </div>
                <div className="blockTwo">
                    <img src={flame2} alt="" />
                    <p>Банкетное меню от 1500 руб.  на человека (до 100 человек).</p>
                </div>
            </div>
            <div className="box">
                <h3>ПОЧЕМУ МЫ?</h3>
                <ul className="corparatifUl">
                    <li>Отдельный зал на 30 человек с профессиональной системой караоке</li>
                    <li>Удобная парковка и близость к трем станциям метро в центре города</li>
                    <li>Большие экраны</li>
                    <li>Сцена с проекционным экраном.</li>
                    <li>Танцпол с современной звуковой и световой аппаратурой</li>
                </ul>
            </div>
        </div>
        </>
    )
}