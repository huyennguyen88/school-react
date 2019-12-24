import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
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