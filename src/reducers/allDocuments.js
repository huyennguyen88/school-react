import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    let index
    switch (action.type) {
        case types.GET_DOCUMENTS:
            state = action.documents
            return [...state]
        case types.ADD_DOCUMENT:
            return [...state,action.document]
        case types.DELETE_DOCUMENT:
            let doc = action.document
            index =state.findIndex((item)=>{
                return item.id === doc.id
            })
            state.splice(index,1)
            console.log("xoa docs",state)
            return [...state]
        default:
            return state;
    }
}
export default myReducer