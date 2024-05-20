import React from "react";


export default function AfishaGallery({event}){
    return(
        <>
        <div className="afishaGallery" key={event.id}>
            <img src={event.photo} alt="" />
            <div className="afishaGalleryText">
                <span>
                    <p>{event.date}</p>
                    <p>•</p>
                    <p>{event.clock}</p>
                </span>
                <h2>{event.name}</h2>
                <button className="afishaBtn">{event.summa}</button>
            </div>
        </div>
        </>
    )
}