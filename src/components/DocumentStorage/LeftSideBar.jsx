import React, { Component } from 'react'
import "./LeftSideBar.scss";
import MenuGradeItem from './MenuGradeItem';
import { connect } from "react-redux";
//import * as actions from '../../actions/index'
class LeftSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grades: []
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.grades === prevState.date) {
          return null
        }
    
        return { grades: nextProps.grades }
      }
    render() {
        var { grades } = this.state
        //console.log("grades", grades)
        var listGrade = grades.map((grade, index) => {
            return <MenuGradeItem key={index} index={index} grade={grade} />
        })
        return (
            <div>
                <nav id="sidebar">

                    <ul className="list-unstyled components">
                        {listGrade}
                    </ul>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        grades: state.grades
    }
}
export default connect(mapStateToProps, null)(LeftSideBar)
