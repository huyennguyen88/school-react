import React, { Component } from 'react'
import LeftSideBar from './LeftSideBar';
import StorageList from './StorageList';
import * as actions from './../../actions/index'
import {connect} from 'react-redux'
class PublicStorage extends Component {
   constructor(props){
       super(props)
       this.props.getAllDocuments()

   }
    render() {

        return (
            <div className="contaner-fluid row">
                <LeftSideBar />
                <StorageList/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getAllDocuments: ()=>{
            return dispatch(actions.getDocumentsApi())
        }
    }
}

export default connect(null,mapDispatchToProps)(PublicStorage)