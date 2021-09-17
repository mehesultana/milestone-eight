import logo from './logo.svg';
import './App.css';

function App() {
	const number = 555;
	const singer = {
		name: 'Dr. Mahfuz',
		job: 'singer',
	};
	const singer2 = {
		name: 'Eva Rahman',
	};
	const singerStyle = {
		backgroundColor: 'red',
		color: 'white',
	};

	return (
		<div className="App">
			<header className="App-header">
				<h3>reac</h3>
				<p>happy React</p>
				<div className="container">
					<h3>this is inside my container</h3>
					<p>my number is: {number}</p>
					<p
						style={{
							backgroundColor: 'gray',
							color: 'megenta',
						}}
					>
						singer: {singer.name} {singer.job}
					</p>
					<p style={singerStyle}>Real singer: {singer2.name}</p>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
