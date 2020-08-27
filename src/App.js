import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Attractions from './components/attractions'

import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <Route path="/" exact/>
        <Route path="/attractions" component={Attractions} />

      </div>
    </Router>
  );
}

export default App;
