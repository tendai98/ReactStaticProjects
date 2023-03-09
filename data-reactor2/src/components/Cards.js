import React from "react";
import cards from "../styles/cards.css"
import chat from "../img/chat.png"
import leads from "../img/leads.png"
import tasks from "../img/share.png"
import pop from "../img/pop.png"

function CardType1(){
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">New Messages</h2>
                <img className="card-icon" alt="icon" src={chat}/>
            </div>
            <div className="card-line"></div>
            <h5 className="card-counter">85</h5>

            <div className="progress-bar">
                <div className="progress-bar-faint"></div>
                <div className="progress-bar-solid"></div>
            </div>
            <h5 className="response-rate">Response Rate</h5>
            <div className="popup-element">
                <img className="pop-element" alt="pop" src={pop}/>
                <h2 className="pop-value">85%</h2>
            </div>
        </div>
    )
}

function CardType2(){
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">New Leads</h2>
                <img className="card-icon" alt="icon" src={leads}/>
            </div>
            <div className="card-line"></div>
            <h5 className="card-counter">21</h5>

            <div className="progress-bar">
                <div className="progress-bar-faint"></div>
                <div className="progress-bar-solid"></div>
            </div>
            <h5 className="card-topic-1">60% Daily Goal</h5> 
            <h5 className="card-topic-2">72 This Week</h5> 

            <div className="popup-element-2">
                <img className="pop-element-2" alt="pop" src={pop}/>
                <h2 className="pop-value-2">80%</h2>
            </div>

        </div>
    )
}

function CardType3(){
    return (
    <div className="card">
            <div className="card-header">
                <h2 className="card-title">Tasks</h2>
                <img className="card-icon" alt="icon" src={tasks}/>
            </div>
            <div className="card-line"></div>
            <h5 className="card-counter">33</h5>

            <div className="progress-bar">
                <div className="progress-bar-faint"></div>
                <div className="progress-bar-solid"></div>
            </div>
            <h5 className="response-rate">Work Rate</h5>
            
            <div className="popup-element">
                <img className="pop-element" alt="pop" src={pop}/>
                <h2 className="pop-value">70%</h2>
            </div>

        </div>
    )
}

function Cards(){
    return(
        <div className="cards-panel">
            <CardType1/>
            <CardType2/>
            <CardType3/>
        </div>
    )
}

export default Cards;