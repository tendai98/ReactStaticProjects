import React from "react";

function Card(props){
    return (
        <div className="card-main">
            <img className="card-pic" alt="stock-pic" src={props.image}></img>
            
            <div className="card-info">
                <div className="card-top-header">
                    <h5 className="card-country">{props.country}</h5>
                    <h5 className="card-google-maps-tag"><u>{props.viewLink}</u></h5>
                </div>
                <h2 className="card-location">{props.location}</h2>
                <h5 className="card-dates">{props.date}</h5>
                <h5 className="card-brief">{props.brief}</h5>
            </div>    
        </div>
    )
}

export default Card;