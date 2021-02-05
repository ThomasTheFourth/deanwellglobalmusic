import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Releases from './pages/Releases';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/releases">
						<Releases />
					</Route>
					<Route exact path="/">
						<Releases />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
