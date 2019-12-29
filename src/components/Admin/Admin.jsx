import React, { Component } from 'react'
import SideBar from './SideBar'
import MainBar from './MainBar'
import {isEmpty} from 'lodash'
import {withRouter} from 'react-router-dom'
class Admin extends Component {
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
    componentWillMount(){
        var token = JSON.parse(localStorage.getItem('token'))
        var teacher = JSON.parse(localStorage.getItem('teacher'))
        if(isEmpty(token) || isEmpty(teacher) || teacher.admin === false){
            this.props.history.push('/notfound')
        }
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
export default withRouter(Admin)