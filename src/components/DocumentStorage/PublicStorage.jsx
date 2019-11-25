import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';
class PublicStorage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <LeftSideBar/>
                    {/* Page Content  */}
                    <div id="content">
                       <h1>Hello</h1>
                    </div>
                </div>

            </div>
        )
    }
}
export default PublicStorage