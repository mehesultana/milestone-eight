import './App.css';

function App() {
	return (
		<div className="App">
			<Person></Person>
			<Person></Person>
			<Person></Person>
		</div>
	);
}

function Person() {
	const person = {
		backgroundColor: 'skyblue',
		border: '3px solid lightpink',
		borderRadius: '20px',
		margin: '10px',
	};
	return (
		<div style={person}>
			<h1>Mehe</h1>
			<h4>profession: Student</h4>
		</div>
	);
}

export default App;
