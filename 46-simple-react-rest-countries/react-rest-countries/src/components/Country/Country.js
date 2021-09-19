import React from 'react';

const Country = (props) => {
	return (
		<div>
			<h4>this is : {props.name}</h4>
			<p>
				Capital is : {props.capital} population : {props.population}
			</p>
		</div>
	);
};

export default Country;
