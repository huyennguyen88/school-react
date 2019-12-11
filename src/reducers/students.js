import * as types from '../constants/ActionTypes'
var myReducer=(state=[],action)=>{
    switch(action.type){
        case types.GET_STUDENTS:
            state = action.students
            return [...state]
        default:
            return [...state]
    }

}
export default myReducer;