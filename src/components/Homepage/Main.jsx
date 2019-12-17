import React, { Component } from 'react'
import BigImage from './BigImage'
import Banner from '../Shared/TopNav/Banner'
export class Main extends Component {
    componentDidMount(){
        document.getElementById('navbar-light-menu').style.position = 'absolute'
    }
    componentWillUnmount(){
        document.getElementById('navbar-light-menu').style.position = ''
    }
    render() {
        return (
            <div className="home_page">
                <Banner/>
            </div>
        )
    }
}

export default Main
