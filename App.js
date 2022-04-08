
// import './App.css';

import React, { Component } from 'react'
import News from './component/News';
import NavBar from './component/NavBar';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        {/* <News Category='Business' /> */}
        <Switch>
          <Route exact path="/Animals"><News key="Animals" Category='Animals' /> </Route>
          {/* <Route exact path="/Anime"><News key="Anime" Category='Anime' />  </Route> */}
          <Route exact path="/Books"><News key="Books" Category='Books' />  </Route>
          <Route exact path="/Business"><News key="Business" Category='Business' />  </Route>
          <Route exact path="/About"><About  key="About"/>  </Route>
          {/* key="About" */}
        </Switch>
        </Router>
      </div>
    )
  }
}


