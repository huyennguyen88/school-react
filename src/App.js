import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Shared/TopNav/Header';
import { Switch, Route } from "react-router-dom";
import Admin from './components/Admin/Admin';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
        <Router>
          <div>
              <Switch>
                  <Route path="/Admin">
                      <Admin/>
                  </Route>
                  <Route path="/">
                      <Homepage/>
                  </Route>
              </Switch>
          </div>
        </Router>
      )
  }
}
export default App;