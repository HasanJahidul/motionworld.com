import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './components/pages/About/About';
import FAQ from './components/pages/FAQ/Faq';
import Home from './components/pages/Home/Home';
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Reviews from './components/pages/Reviews/Reviews';
import Work from './components/pages/Work/Work';


function App() {
  return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
						<Work />
						<About />
						<Reviews />
						<FAQ />
					</Route>
					<Route exact path="/work">
						<Portfolio/>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
