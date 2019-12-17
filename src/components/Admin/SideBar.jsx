import React, { Component } from 'react'
import './SideBar.css'
export default class SideBar extends Component{
        constructor(props){
        super(props)
    }

    nav = () =>{
        let todo = ['Teachers','Students','Parents']
        let li = (todo) => {
            return (
                    <a className = "nav-link">
                        <p>{todo}</p>
                    </a>
            )
        }
        return(
            <ul className ="nav">
                {
                    todo.map((item,index)=>{return (
                        <li className = "nav-item" key = {index}>
                            {li(item,index)}
                            <hr/>
                        </li>
                        )})
                }
            </ul>
        )
    }

    render(){
        return(
            <div className = "touch">
                <div id="Sidebar" className = "sidebar darken-overlay">
                    <div className = "sidebar-wrapper">
                        {this.nav()}
                    </div>
                </div>
            </div>
        );
    }
}