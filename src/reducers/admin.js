import * as types from '../constants/ActionTypes'
var initialState = {teachers:[],students:[],parents:[]}
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.ADMIN_GET_TEACHERS:
            state.teachers = [...action.teachers]
            return state
        case types.ADMIN_GET_STUDENTS:
            state.students = [...action.students]
            return state
        case types.ADMIN_GET_PARENTS:
            state.parents = [...action.parents]
            return state
        default:
            return state;
    }
}
export default myReducer