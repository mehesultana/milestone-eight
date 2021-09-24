import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Drink = (props) => {
	console.log(props.drink);
	const { strDrink, strDrinkThumb, strCategory } = props.drink;

	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={strDrinkThumb} />
				<Card.Body>
					<Card.Title>{strDrink}</Card.Title>
					<Card.Text>{strCategory}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Drink;
