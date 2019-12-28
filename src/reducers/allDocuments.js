import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_DOCUMENTS:
            state = action.documents
            return [...state]
        case types.DELETE_DOCUMENT:
            let index = state.findIndex((item,index)=>{
                return item.id === action.id
            })
            state.splice(index,1)
            return [...state]
        default:
            return state;
    }
}
export default myReducer