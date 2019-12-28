import callApi from '../utils/apiCaller'
import callApiForm from '../utils/apiForm'
import * as types from '../constants/ActionTypes'
import Swal from 'sweetalert2'
export const getDocumentsApi = (dispatch)=>{
    return (dispatch)=>{
        return callApi('documents','GET',null)
        .then(res => 
            {
                dispatch(getDocuments(res.data))
            })
    }
}
export const getDocuments =(documents)=>{
    return {
        type: types.GET_DOCUMENTS,
        documents
    }
}
export const getDocumentsWithGrade =(grade_id, subject_id, documents)=>{
    return {
        type: types.GET_DOCUMENTS_WITH_GRADE,
        grade_id,
        subject_id,
        documents
    }
}
export const deleteDocumentsApi = (id)=>{
    return (dispatch)=>{
        console.log("goi api")
        return callApi('documents/'+id,'DELETE',null)
        .then(res => 
            {
                dispatch(documentDelete(res.data))
            })
    }
}
export const documentDelete = (id)=>{
    return{
        type: types.DELETE_DOCUMENT,
        id
    }
}
export const addDocumentApi = (data)=>{
    return (dispatch)=>{
        console.log("goi api add")
        return callApiForm('documents','POST',data)
        .then(res => {
            console.log(res.data)
            
            Swal.fire({
                icon: 'success',
                title: 'Đã đăng tài liệu thành công',
                showConfirmButton: false,
                timer: 1500
              })
              dispatch( addDocument(res.data))

        })
    }
}
export const addDocument = (document)=>{
    return{
        type: types.ADD_DOCUMENT,
        document
    }
}