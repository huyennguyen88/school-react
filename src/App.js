import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Shared/TopNav/Header';
import Admin from './components/Admin/Admin';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
        <Router>
          <div>
              {/* <Homepage/> */}
              <Admin/>
          </div>
        </Router>
      )
  }
}
export default App;