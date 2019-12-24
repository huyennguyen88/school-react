import React, { Component } from 'react'
import AddForm from './AddForm'

class StorageList extends Component {
    render() {
        return (
            <div className="col-9">
                <h1>Public storage</h1>
                <button type="button" className="btn btn-danger float-right" data-toggle="modal" data-target="#exampleModal">
                    <i className="fas fa-plus mr-2"></i>
                    <span>New Document</span> 
                </button>
                <AddForm/>
            </div>
        )
    }
}
export default  StorageList