import React, { Component } from 'react'
import './Sidebar.css'
export default class SideBar extends Component{
    
    constructor(props)
    {
        super(props)
    }

    nav = () =>{
        let todo = ['Teachers','Students','Parents']
        let li = (todo) => {
            return (<li className = "nav-item">
                <a className = "nav-link">
                    <i className = "material-icons">grid_on</i>
                <p>{todo}</p>
                </a>
            </li>)
        }
        return(
            <ul className ="nav">
                <li className = "nav-item active">
                    <a className = "nav-link">
                        <i className = "material-icons">DashBoard</i>
                        <p>DashBoard</p>
                    </a>
                </li>
                {
                    todo.map((item)=>{return li(item)})
                }
            </ul>
        )
    }

    render(){
        return(
            <div className = "sidebar" data-color="azure" data-background-color = "black">
                <div className = "sidebar-wrapper">
                    {this.nav()}
                </div>
            </div>
        );
    }
}