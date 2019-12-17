import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_STUDENTS_SCORES:
            state = action.scores
            return [...state]
        default:
            return [...state];
    }
}
export default myReducer