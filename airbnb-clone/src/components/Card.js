import React from "react";

function Card(props){

	let profile = props.profile
	let rating = props.rating
	let country = props.country
	let brief = props.brief
	let price = props.price
	let quantity = props.quantity
	let isHidden = props.soldout ? 'visible' : 'hidden';

	return (
		<div className="card">
			<div className="card-badge" style={{visibility: isHidden}}>SOLD OUT</div>
			<img alt="img" src={profile} className="card-img"></img>
  			<div className="card-stats">
				<img alt="img" className="card-star" src={'./img/star.png'}/>
				<span>{rating}</span>
				<span className="gray">({quantity}) - </span>
				<span className="gray">{country}</span>
			</div>
			<p>{brief}</p>
			<p><span className="bold">From {price}</span> / person</p>
		</div>
	)
}

export default Card;
