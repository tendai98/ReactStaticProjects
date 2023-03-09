import React from 'react';
import Navbar from '../components/Navbar';
import CardPanel from '../components/Cards';
import SidePanel from '../components/SidePanel';
import Chart from '../components/Chart'
import style from '../styles/style.css';

function App(){
    return  (
        <div className='dashboard-boundary'>
            <SidePanel/>
            <div className='dashboard-panel'>
                <Navbar/>
                <div className='reactor-sub-body'>
                    <CardPanel/>
                </div>
                <Chart/>
            </div>
        </div>
    )
}

export default App;