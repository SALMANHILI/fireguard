import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from './components/Banner';
import  EarthGlobe  from "./components/EarthGlobe";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Banner />
          <EarthGlobe/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
