import React, { Component } from 'react'
import AddForm from './AddForm'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import './StorageList.css'

class StorageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            documentStore: [],
            teacher: '',
            user: '',
            documents: ''
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.documentStore === prevState.documentStore 
            && nextProps.teacher ===prevState.teacher
            && nextProps.user ===prevState.user
            && nextProps.documents ===prevState.documents) {
            return null
        }
        return {
            documentStore: nextProps.documentStore,
            teacher: nextProps.teacher,
            user: nextProps.user,
            documents: nextProps.documents
        }
    }
    onDeleteDoc =(document_id)=>{
        this.props.deleteDocumentsApi(document_id)

    }
    render() {
        console.log("state", this.state)
        var { documentStore,teacher,user } = this.state
        var doclist = documentStore.map((doc, index) => {
            return <div key={index} className="card border border-secondary mx-2 mt-3" style={{ width: '170px' }}>
                <img src="https://images.khotrithucso.com/thumbnails/8d41585d04df34f7f576f34998d41fec/package035/967969114c151b8d20f91bf0c0ae47a3/16cafa4b3c79a27287c50b5fb514f097/232690-140x182.jpg" className="cardImg card-img-top" alt="pdf img" />
                <div className="cardBD bg-light ">
                    <div className="pt-2 px-3" style={{ height: '90px' }}>
                        <p className="h5">{doc.title}</p>
                    
                    </div>
                    <div className="align-self-end ml-3" ><i className="text-danger far fa-file-pdf fa-2x"></i></div>
                </div>
                <div className="bg-white my-3 mx-1">
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-info btn-sm">
                            <a href={doc.link} target="_blank" >
                                <span>Xem tài liệu</span>
                                <i className="fas fa-eye ml-1"></i>
                            </a>
                        </button>
                        <button onClick={()=>this.onDeleteDoc(doc.id)} type="button" className="btn btn-danger btn-sm ml-1">
                            <span>Xóa</span>
                            <i className="fas fa-trash-alt ml-1"></i>
                        </button>
                    </div >

                </div>
            </div>
        })
        var showAdd = teacher?  <button type="button" className="btn btn-danger float-right mx-2 my-2" data-toggle="modal" data-target="#exampleModal">
        <i className="fas fa-plus mr-2"></i>
        <span>New Document</span> 
    </button> : ''
        return (
            <div className="col-9">
               {showAdd}
                <AddForm />
                <div className="row">
                    {doclist}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        documentStore: state.documentStore,
        teacher: state.teacher,
        user: state.session,
        documents: state.allDocuments

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteDocumentsApi: (document_id)=>{
            return dispatch(actions.deleteDocumentsApi(document_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StorageList)