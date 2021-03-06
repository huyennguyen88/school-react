import React from 'react';
import './App.css';
import { connect } from "react-redux";
import * as actions from './actions/index'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Admin from './components/Admin/Admin'
// const socket = io("localhost:5000");
class App extends React.Component {
  constructor(props){
    super(props)
    this.props.getSubjects()
    this.props.getGrades()
  }
  componentDidMount(){
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
const mapDispatchToProps =(dispatch)=>{
  return{
      getSubjects : () =>{
          dispatch(actions.getSubjectsApi())
      },
      getGrades: () => {
        dispatch(actions.getGradesApi())
    }
  }
}
export default connect(null,mapDispatchToProps) (App);
