import { useEffect, useState } from 'react';
import './App.css';
import Device from './components/Device/Device';

function App() {
	const [steps, setSteps] = useState(0);
	const handleIncreaseSteps = () => {
		const newSteps = steps + 1;
		setSteps(newSteps);
	};
	useEffect(() => {
		console.log(steps);
	}, [steps]);
	return (
		<div className="App">
			<h3>My Steps: {steps}</h3>
			<button onClick={handleIncreaseSteps}>Walk</button>
			<Device name="phone" price="13000"></Device>
		</div>
	);
}

export default App;
