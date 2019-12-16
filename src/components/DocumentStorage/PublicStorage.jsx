import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';
class PublicStorage extends Component {

    render() {
        return (

            <div className="wrapper">
                <LeftSideBar />
                <div id="content">
                    <h1>Public storage</h1>
                </div>
            </div>
        )
    }
}
export default PublicStorage