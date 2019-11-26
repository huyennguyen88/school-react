import React, { Component } from 'react'
import "./LeftSideBar.scss";
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class MenuGradeItem extends Component {
    constructor(props){
        super(props)
        this.state ={  
            subjects: []
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.subjects === prevState.subjects){
            return null
        }
        return {subjects: nextProps.subjects}
    }
    render() {
        var {grade, index} = this.props
        var {subjects} = this.state
        var listSubject = subjects.map((subject,index)=>{
            return <li key={index}>
                <a href="#">{subject.name}</a>
            </li>
        })
        return (
            <li>
                <a href={"#grade"+index} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{grade.name}</a>
                <ul className="collapse list-unstyled" id={"grade"+index}>
                    {listSubject}
                </ul>
            </li>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}
export default connect(mapStateToProps, null)(MenuGradeItem)
