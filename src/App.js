import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Attractions from './components/attractions'
import singleAttraction from './components/singleAttraction'

import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <Route path="/" exact/>
        <Route path="/attractions" exact component={Attractions} />
        <Route path="/attractions/:id" exact component={singleAttraction} />

      </div>
    </Router>
  );
}

export default App;