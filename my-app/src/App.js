import React, { Component } from 'react';
// import logo from './logo.svg';
import * as d3 from 'd3';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { TravelGuide } from './TravelGuide';
import { Map } from './Map';
import { Homepage } from './Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    console.log(this.state.data)

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

        <Router>
          <div className="container">
            <Link to="/" className="header-button"> Home </Link>
            {' '}
            <Link to="/TravelGuide" className="header-button"> Travel Guide </Link>
            {' '}
            <Link to="/Map" className="header-button"> Map </Link>
            <Route exact path="/" component={Homepage} />
            <Route path="/TravelGuide" component={TravelGuide} />
            <Route path="/Map" component={Map} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
