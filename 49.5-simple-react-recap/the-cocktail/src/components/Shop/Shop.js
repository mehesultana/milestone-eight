import React, { Fragment, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Drink from '../Drink/Drink';
import Drinks from '../Drinks/Drinks';
import './Shop.css';

const Shop = () => {
	const [drinks, setDrinks] = useState([]);

	const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.drinks);
				setDrinks(data.drinks);
			});
	}, []);

	return (
		<div className="shop-container">
			<div className="cocktail-container">
				<h2>Cocktail : {drinks.length}</h2>
				<Row xs={1} md={3} className="g-4">
					{drinks.map((d) => {
						// console.log(d);
						const { idDrink } = d;
						return (
							<Fragment key={idDrink}>
								<Drink drink={d}></Drink>
							</Fragment>
						);
					})}
				</Row>
			</div>

			<div className="cart-container">
				<Drinks></Drinks>
			</div>
		</div>
	);
};

export default Shop;
