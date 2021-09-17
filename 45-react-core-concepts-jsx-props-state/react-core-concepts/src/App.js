import './App.css';

function App() {
	return (
		<div className="App">
			<Friend phone="0127407315" address="Noakhali"></Friend>
			<Friend phone="0832479490" address="Rongpur"></Friend>
			<Friend phone="0143985488" address="Jessor"></Friend>
			<Friend phone="0346457450" address="Dhaka"></Friend>
		</div>
	);
}

/* 
      <p id="title">Title</p>
			<Person name="Rubel" nayika="Moushumi"></Person>
			<Person name="BappaRaz" nayika="Cheka"></Person>
			<Person name="Kuber" nayika="Kopila"></Person>

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
*/

function Friend(props) {
	console.log(props);
	return (
		<div className="person">
			<h3>phone: {props.phone} </h3>
			<h5>Address: {props.address}</h5>
		</div>
	);
}

export default App;
