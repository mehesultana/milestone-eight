import './App.css';

function App() {
	return <div className="App"></div>;
}
/* function Countries() {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h1>Traveling around the world</h1>
			<h4>Countries Available: {countries.length}</h4>
			{countries.map((country) => (
				<Country name={country.name} capital={country.capital}></Country>
			))}
		</div>
	);
}

function Country(props) {
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<p>Capital: {props.capital}</p>
		</div>
	);
} */
export default App;
