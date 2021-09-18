import './App.css';
import { useEffect, useState } from 'react';

function App() {
	return (
		<div className="App">
			<LoadUsers></LoadUsers>
			<MyComponent brand="Apple" price="5000"></MyComponent>
			<MyComponent brand="Macrosoft" price="1000"></MyComponent>
			<MyComponent brand="Google" price="0"></MyComponent>
		</div>
	);
}

function LoadUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<h1>Users Loaded: {users.length}</h1>
			{users.map((user) => (
				<User name={user.name} phone={user.phone}></User>
			))}
		</div>
	);
}

function User(props) {
	return (
		<div className="user">
			<h2>Name: {props.name}</h2>
			<p>Call me {props.phone}</p>
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
