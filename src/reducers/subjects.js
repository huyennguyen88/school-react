import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_SUBJECTS:
            state = action.subjects
            return [...state]
        default:
            return state;
    }
}
export default myReducer