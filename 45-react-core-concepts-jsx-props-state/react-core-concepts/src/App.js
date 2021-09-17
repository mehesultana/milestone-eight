import './App.css';

function App() {
	const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Bappi', 'Shuvo'];

	const cinemas = [
		{ nayok: 'Koober', nayika: 'kopila' },
		{ nayok: 'Rubel', nayika: 'Moushumi' },
		{ nayok: 'Razzak', nayika: 'Shabana' },
		{ nayok: 'Jashim', nayika: 'Suchorita' },
	];

	return (
		<div className="App">
			<ul>
				{nayoks.map((nayok) => (
					<li>{nayok}</li>
				))}
			</ul>
			{/* <Cinema nayok="J Bond" nayika="cat w"></Cinema> */}
			{cinemas.map((cinema) => (
				<Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>
			))}
		</div>
	);
}

/* 

        <ul>
				{nayoks.map((nayok) => (
					<li>{nayok}</li>
				))}
			</ul>
			<Person name={nayoks[0]} nayika="Moushumi"></Person>
			<Person name={nayoks[1]} nayika="Cheka"></Person>
			<Person name={nayoks[2]} nayika="Kopila"></Person>
      -----------
      <Person name="Rubel" nayika="Moushumi"></Person>
			<Person name="BappaRaz" nayika="Cheka"></Person>
			<Person name="Kuber" nayika="Kopila"></Person>
        --------
      <Friend phone="0127407315" address="Noakhali"></Friend>
			<Friend phone="0832479490" address="Rongpur"></Friend>
			<Friend phone="0143985488" address="Jessor"></Friend>
			<Friend phone="0346457450" address="Dhaka"></Friend>

      function Friend(props) {
	    console.log(props);
	    return (
		  <div className="person">
			<h3>phone: {props.phone} </h3>
			<h5>Address: {props.address}</h5>
		</div>
	);
}
*/
function Person(props) {
	console.log(props);
	const person = {
		backgroundColor: 'skyblue',
		border: '3px solid lightpink',
		borderRadius: '10px',
		margin: '10px',
	};
	return (
		<div style={person}>
			<h1>Name: {props.name}</h1>
			<h4>Hero of: {props.nayika}</h4>
		</div>
	);
}
function Cinema(props) {
	return (
		<div className="person">
			<h2>Nayok: {props.nayok}</h2>
			<h4>Nayika: {props.nayika}</h4>
		</div>
	);
}

export default App;
