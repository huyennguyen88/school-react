import React, { Component } from 'react'
import SideBar from './SideBar'
import MainBar from './MainBar'
export default class Admin extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div style = {style.wrapper}>
                <SideBar/>
                <MainBar/>
        </div>
        )
    }
}
const style = {
    wrapper:{
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
    }
}