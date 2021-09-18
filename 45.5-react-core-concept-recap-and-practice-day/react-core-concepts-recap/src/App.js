import './App.css';
import { useState } from 'react';

function App() {
	return (
		<div className="App">
			<MyComponent brand="Apple" price="5000"></MyComponent>
			<MyComponent brand="Macrosoft" price="1000"></MyComponent>
			<MyComponent brand="Google" price="0"></MyComponent>
		</div>
	);
}

function MyComponent(props) {
	const [points, setPoints] = useState(1);
	// console.log(props);
	const myStyle = {
		backgroundColor: 'lightblue',
		border: '3px solid blue',
		margin: '10px',
		padding: '5px',
	};
	const handleAddPoinst = () => {
		// console.log('click');
		const newPoints = points * 2;
		setPoints(newPoints);
	};
	return (
		<div style={myStyle}>
			<h1>My own Component {props.brand}</h1>
			<h2>
				Asking money: price: {props.price} , I have points: {points}
			</h2>
			<button onClick={handleAddPoinst}>Add points</button>
			<p style={{ color: 'hotpink' }}>I can wright my own Component</p>
		</div>
	);
}

export default App;
