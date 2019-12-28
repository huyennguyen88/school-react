import React, { Component } from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
export default class SideBar extends Component{
        constructor(props){
            super(props)
        }
    nav = () =>{
        let todo = ['Teachers','Students','Parents']
        let li = (todo) => {
            return (
                // onClick = {(todo) =>{this.props.getUser(todo)}}
                <Link to={"/" + todo} className = "nav-link " >
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
}