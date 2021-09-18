import './App.css';

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
	// console.log(props);
	const myStyle = {
		backgroundColor: 'lightblue',
		border: '3px solid blue',
		margin: '20px',
		padding: '10px',
	};
	return (
		<div style={myStyle}>
			<h1>My own Component {props.brand}</h1>
			<h2>Asking money: {props.price}</h2>
			<p style={{ color: 'hotpink' }}>I can wright my own Component</p>
		</div>
	);
}

export default App;
