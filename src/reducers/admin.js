import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_STUDENTS:
            state = action.students
            return [...state]
        case types.GET_TEACHERS:
            state = action.teachers
            return [...state]
        case types.GET_PARENTS:
            state = action.parents
            return [...state]
        case types.CREATE_USERS:
            state = action.user
            return [...state]
        default:
            return state;
    }
}
export default myReducer