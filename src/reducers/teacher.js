import * as types from '../constants/ActionTypes'
var initialState = {}
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.TEACHER_NOW:
            state = action.teacher
            localStorage.setItem('teacher', JSON.stringify(state))
            return state
        case types.GET_TEACHER_NOW:
            state = JSON.parse(localStorage.getItem('teacher')) 
            return state
        case types.LOG_OUT:
            localStorage.removeItem('teacher')
        default:
            return state;
    }
}
export default myReducer