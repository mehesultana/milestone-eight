import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Header></Header>
			<Shop></Shop>
		</Container>
	);
}

export default App;
