import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
              <Homepage/>
          </div>
        </Router>
      )
  }
}

export default App;
