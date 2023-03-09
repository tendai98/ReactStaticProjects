import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';

function App(){

   const cards = Data.map(obj => {
		return <Card key={Math.random()} profile={obj.profile} rating={obj.rating} quantity={obj.quantity} country={obj.country} price={obj.price} brief={obj.brief} soldout={obj.soldOut} />
   })

    return (
        <div className="app-layout">
            <Navbar/>
		<Hero/>
		<div className="contacts">
			{cards}
		</div>
	</div>
    )
}

export default App;
