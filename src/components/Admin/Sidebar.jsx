import React, { Component } from 'react'
import './admin.css'
import sidebar from '../../image/sidebar.jpg'
export default class SideBar extends Component{
    
    constructor(props)
    {
        super(props)
    }

    nav = () =>{
        let todo = ['Teachers','Students','Parents']
        let li = (todo,index) => {
            return (
            <>
                <li className = "nav-item" key = {index}>
                    <a className = "nav-link">
                        <p>{todo}</p>
                    </a>
                </li>
                <hr/>   
            </>
            )
        }
        return(
            <ul className ="nav">
                <li id = "DashBoard" className = "nav-item active">
                    <a className = "nav-link">
                        <i className = "material-icons"></i>
                        <p>DashBoard</p>
                    </a>
                </li>
                <hr/>
                {
                    todo.map((item,index)=>{return li(item,index)})
                }
            </ul>
        )
    }

    render(){
        return(
            <a className = "touch">
                <div id="Sidebar" className = "sidebar darken-overlay">
                    <div className = "sidebar-wrapper">
                        {this.nav()}
                    </div>
                </div>
            </a>
        );
    }
}