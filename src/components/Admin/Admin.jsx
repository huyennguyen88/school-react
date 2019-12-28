import React, { Component } from 'react'
import SideBar from './SideBar'
import MainBar from './MainBar'
export default class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            sideBarValue:"-260px"
        }
    }
    sideBar = (value) =>{
        this.setState({
            sideBarValue:value
        })
    }
    render(){
        return (
        <div>
                <SideBar sideBar = {this.state.sideBarValue}/>
                <MainBar sideBar = {this.sideBar}/>
        </div>
                 
        )
    }
}