import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class ListClassItem extends Component {
    constructor(props){
        super(props)
    }
    loadStudentInClass = ()=>{
        var token = JSON.parse(localStorage.getItem('token'))
        this.props.loadStudentInClass(this.props.lophoc.id)
        this.props.loadStudentScoreInClass(this.props.lophoc.id,token)
    }
    render() {
        var {lophoc,number} = this.props
        return ( 
                <tr className="table table-info">
                    <td>{lophoc.id}</td>
                    <td>{lophoc.name}</td>
                    <td>{number}</td>
                    <td>
                        <input type="checkbox" name="" id=""/>
                    </td>
                    <td>
                        <Link to="listclass/classdetail">
                            <button 
                                onClick={this.loadStudentInClass} 
                                type="button" 
                                className="btn btn-info"
                            >Xem chi tiết
                            </button>
                        </Link>
                    </td>
                </tr>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        loadStudentInClass : (id_class)=>{
            return dispatch(actions.getStudentsInClassApi(id_class))
        },
        loadStudentScoreInClass: (id_class,token)=>{
            console.log(token)
            return dispatch(actions.getStudentsScoreInClassApi(id_class,token))
        }
    }   
}
export default connect(null,mapDispatchToProps)(ListClassItem);