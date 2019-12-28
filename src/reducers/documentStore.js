import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_DOCUMENTS_WITH_GRADE:
            let grade_id = action.grade_id
            let subject_id = action.subject_id
            let documents = action.documents
            state = documents.filter((document,index)=>{
                return (document.grade_id === grade_id && document.subject_id === subject_id)
            })
            return [...state]  
        case types.ADD_DOCUMENT:
            return [...state, action.document]
        case types.DELETE_DOCUMENT:
            let doc = action.document
            let index =[...state].findIndex((item)=>{
                return item.id === doc.id
            })
            state.splice(index,1)
            return [...state]

        default:
            return state;
    }
}
export default myReducer