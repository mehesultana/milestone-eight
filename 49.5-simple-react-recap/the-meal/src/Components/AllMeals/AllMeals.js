import React, { useEffect, useState } from 'react';

const AllMeals = () => {
	const [meals, setMeals] = useState([]);
	const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.meals);
				setMeals(data.meals);
			});
	}, []);

	return (
		<div>
			<h1>Meal : {meals.length}</h1>
		</div>
	);
};

export default AllMeals;
