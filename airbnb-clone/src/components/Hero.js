import React from "react";
import photoGrid from "../img/hero.png";

function Hero(){
	return (
		<section className="hero">
			<img alt="imgz" className="hero-grid" src={photoGrid}></img>
			<h1 className="hero-header" >Online Experiences</h1>
			<p className="hero-text" >Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.</p>
		</section>
	)
}


export default Hero;
