import React, { Component } from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
import * as actions from '../../actions'
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) =>{
        return {
            getUser : async(role) =>{
            switch(role){
                case 'Teachers':
                    return await dispatch(actions.getTeachersApi())
                case 'Students':
                    return await dispatch(actions.getStudentsApi())
                case 'Parents':
                    return await dispatch(actions.getParentsApi())
            }
        }
    }
}
export default connect(null,mapDispatchToProps)(class SideBar extends Component{
        constructor(props){
            super(props)
        }
    get = (todo) =>{
        this.props.getUser(todo)
    }
    nav = () =>{
        let todo = ['Teachers','Students','Parents']
        let li = (todo) => {
            return (
                // onClick = {(todo) =>{this.props.getUser(todo)}}
                <Link to={"/" + todo} className = "nav-link " onClick = {()=>this.get(todo)}>
                        <p>{todo}</p>
                </Link>
            )
        }
        return(
            <ul>
                {
                    todo.map((item,index)=>{return (
                        <li className = "nav-item" key = {index}>
                            {li(item,index)}
                        </li>
                        )})
                }
            </ul>
        )
    }

    render(){
        return(
            <div className = "sideBar layout" style = {{left:this.props.sideBar}}>
                <Link to = "/">
                    <div className = "iconic">
                            <i className = "fas fa-school fa"></i>
                            Administrator
                    </div>
                </Link>
                {this.nav()}
            </div>
        );
    }
})