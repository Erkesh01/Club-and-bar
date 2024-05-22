import React from "react";
import gallery1 from "../data/img/gallery1.png"
import gallery2 from "../data/img/gallery2.png"
import gallery3 from "../data/img/gallery3.png"
import gallery4 from "../data/img/gallery4.png"
import gallery5 from "../data/img/gallery5.png"
import gallery6 from "../data/img/gallery6.png"
import gallery7 from "../data/img/gallery7.png"
import gallery8 from "../data/img/gallery8.png"
import gallery9 from "../data/img/gallery9.png"
import gallery10 from "../data/img/gallery10.png"
import gallery11 from "../data/img/gallery11.png"
import gallery12 from "../data/img/gallery12.png"
import more from "../data/img/more.png"
import './gallery.css'

export default function Gallery(){
    return(
        <>
        <div className="galleryMain">
            <div className="galleryText">
            <button>Top “Manhattan” menu</button>
                <h2>ГАЛЕРЕЯ</h2>
            </div>
            <div className="galleryWrap">
                <div className="gallery">
                    <img src={gallery1} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery2} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery3} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery4} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery5} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery6} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery7} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery8} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery9} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery10} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery11} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
                <div className="gallery">
                    <img src={gallery12} alt="" />
                    <div className="more">
                        <img src={more} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}