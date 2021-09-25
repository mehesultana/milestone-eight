import React from 'react';

const Meal = (props) => {
	const { strMealThumb, strMeal, strCategory } = props.meal;
	return (
		<div className="meal">
			<img src={strMealThumb} alt="" />
			<h4> Name: {strMeal}</h4>
			<p>Catagory: {strCategory}</p>
		</div>
	);
};

export default Meal;
