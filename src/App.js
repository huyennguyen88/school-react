import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from './actions'
import Admin from './components/Admin/Admin'
class App extends React.Component {
  constructor(props){
    super(props)
    // this.props.getSubjects()
    // this.props.getGrades()
  }
  render() {
     // console.log("grades app",this.props.grades)
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
// const mapStateToProps =(state)=>{
//   return {
//     subjects: state.subjects,
//     grades: state.grades
//   }

// }
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
