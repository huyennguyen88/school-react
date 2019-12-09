import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from './actions'
import io from 'socket.io-client'
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
              <Homepage/>
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
