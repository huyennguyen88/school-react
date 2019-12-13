import React, { Component } from 'react'
import SideBar from './Sidebar'
import './admin.css'
export default class Admin extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className = "wrapper">
                       <SideBar/>
            </div>
        )
    }
}