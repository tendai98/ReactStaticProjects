import React from "react";
import chart from '../styles/chart.css'
import chart_line from "../img/line.png"

function Chart(){
    return (
        <div>
            <p className="chart-title">Chart Activity</p>
            <div className="chart-main">
                <img className="chart-img" alt="chart" src={chart_line}></img>
            </div>
        </div>
    )
}

export default Chart;