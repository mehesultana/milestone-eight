import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './AllMeals.css';

const AllMeals = () => {
	const [meals, setMeals] = useState([]);
	const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.meals);
				setMeals(data.meals);
				// const strMeals = meals.map((meal) => meal.strMeal);
				// console.log(strMeals);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h1>Total Meals : {meals.length}</h1>
			{/* <ul>{meals.map((meal) => meal.strMeal)}</ul> */}
			<div className="meals-container">
				{meals.map((meal) => (
					<Meal key={meal.idMeal} meal={meal}></Meal>
				))}
			</div>
		</div>
	);
};

export default AllMeals;
