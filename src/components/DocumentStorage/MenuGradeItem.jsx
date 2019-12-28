import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from './../../actions/index'
class MenuGradeItem extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={  
            subjects: [],
            documents: []
            
        }
    }
    static getDerivedStateFromProps(nextProps,prevState)
    {
        if(nextProps.subjects === prevState.subjects && nextProps.documents === prevState.documents){
            return null
        }
        return {
            subjects: nextProps.subjects,
            documents: nextProps.documents
        }
    }
    onChoose =(grade_id, subject_id, documents)=>{
        this.props.getDocumentsWithGrade(grade_id,subject_id,documents)
    }
    render() 
    {
        
        var {grade, index} = this.props
        var {subjects,documents} = this.state
        var listSubject = subjects.map((subject,index)=>{
            return  <div key={index}  onClick={()=> this.onChoose(grade.id,subject.id,documents)}>
                        <div  className="list-group-item list-group-item-action list-group-item-light">
                            {subject.name} <i className="fas fa-angle-right float-right"></i>       
                        </div>
                    </div> 
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
        subjects: state.subjects,
        documents: state.allDocuments
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getDocumentsWithGrade: (grade_id,subject_id,documents)=>{
            return dispatch(actions.getDocumentsWithGrade(grade_id,subject_id,documents))
        },
        getAllDocuments: ()=>{
            return dispatch(actions.getDocumentsApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuGradeItem)
