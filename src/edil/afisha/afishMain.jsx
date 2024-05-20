import React from "react";
import { dataOne } from "../data/dataOne";
import './afisha.css'
import AfishaGallery from "./afishaGallery";

export default function AfishaMain(){
    return(
        <>
        <div className="afishMain">
            <div className="afishMainText">
                <button>TOP “MANHATTAN” MENU</button>
                <h2>АФИША</h2>
            </div>
            <div className="afishaWrap">
                <AfishaGallery event={dataOne[2]} />
                <AfishaGallery event={dataOne[1]} />
                <AfishaGallery event={dataOne[0]} />
                <AfishaGallery event={dataOne[3]} />
                <AfishaGallery event={dataOne[0]} />
                <AfishaGallery event={dataOne[1]} />
                <AfishaGallery event={dataOne[2]} />
                <AfishaGallery event={dataOne[3]} />
                <AfishaGallery event={dataOne[0]} />
                <AfishaGallery event={dataOne[1]} />
                <AfishaGallery event={dataOne[2]} />
                <AfishaGallery event={dataOne[3]} />
            </div>
        </div>
        </>
    )
}