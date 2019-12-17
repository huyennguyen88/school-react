import React, { Component } from 'react'
import MenuGradeItem from './MenuGradeItem';
import { connect } from "react-redux";
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

        var listGrade = grades.map((grade, index) => {
            return <MenuGradeItem key={index} index={index} grade={grade} />
        })
        return (
            <div className="col-3">
                <p className="h4 px-3 py-3 text-secondary">Tài liệu <i class="fas fa-book-open"></i></p>
                <div className="list_group" >
                    {listGrade}
                </div>
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
