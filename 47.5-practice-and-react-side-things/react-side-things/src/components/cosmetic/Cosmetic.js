import React from 'react';

const cosmetic = (props) => {
	const { name, price, gender, _id } = props.cosmetic;
	const handlePurchase = (id) => {
		//set to local storage
		console.log(id);
	};

	return (
		<div>
			<h2>Name : {name}</h2>
			<p>Price : ${price}</p>
			<p>Id : ${_id}</p>
			<p>Gender : {gender}</p>
			<button onClick={() => handlePurchase(_id)}>Purchase</button>
		</div>
	);
};

export default cosmetic;
