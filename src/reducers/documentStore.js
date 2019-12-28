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
        default:
            return state;
    }
}
export default myReducer