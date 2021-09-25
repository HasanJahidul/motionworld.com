import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Work from './components/pages/Work'
function App() {
  return (
   <> 
   <Router>
      <Switch>
          <Route exact path="/">
            <Home />
            <Work/>
          </Route>
      </Switch>
   </Router>
   </>
  );
}

export default App;
