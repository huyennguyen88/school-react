import React, { Component } from 'react'
import { connect } from "react-redux";
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
            return  <a  key={index} href="abc" className="list-group-item list-group-item-action list-group-item-light">
                       {subject.name} <i className="fas fa-angle-right float-right"></i>       
                        </a>
        })
        return (
            <div>
                <a href={"#grade"+index} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle list-group-item list-group-item-action list-group-item-danger h5">{grade.name}</a>
                <div className="collapse" id={"grade"+index}>
                    {listSubject}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}
export default connect(mapStateToProps, null)(MenuGradeItem)
