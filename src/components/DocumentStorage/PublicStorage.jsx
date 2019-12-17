import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';
import StorageList from './StorageList';
class PublicStorage extends Component {

    render() {
        return (

            <div className="contaner-fluid row">
                <LeftSideBar />
                <StorageList/>
            </div>
        )
    }
}
export default PublicStorage