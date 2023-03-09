import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import DataObjects from "./components/DataSource";

import NavbarCSS from './css/navbar.css';
import CardCSS from './css/card.css';
import BodyCSS from './css/body.css';

function App(){

    const travelCardObjects = DataObjects.map(
        obj => {
            return <Card 
                        image={obj.image} 
                        country={obj.country} 
                        location={obj.location} 
                        date={obj.date} 
                        viewLink={obj.viewLink} 
                        brief={obj.brief} />
        }   
    )

    return (
        <div>
            <div className="sub-body">
                <Navbar img={"./img/globe.png"}/>
                <div>
                    {travelCardObjects}
                </div>
            </div>
        </div>
    )
}

export default App