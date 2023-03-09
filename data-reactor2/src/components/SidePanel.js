import React from "react";
import sidebar from '../styles/sidepanel.css'
import msg from '../img/messages.png'
import tsk from '../img/task.png'
import net from '../img/network.png'
import app from '../img/apps.png'
import loc from '../img/location.png'

function SidePanel(){
    return (
        <div className="sidepanel">
            <img alt="1" src={msg}/>
            <img alt="2" src={tsk}/>
            <img alt="3" src={net}/>
            <img alt="4" src={app}/>
            <img alt="5" src={loc}/>
        </div>
    )
}

export default SidePanel