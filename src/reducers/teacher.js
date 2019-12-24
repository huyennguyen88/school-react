import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.TEACHER_NOW:
            state = action.teacher
            return state
        default:
            return state;
    }
}
export default myReducer