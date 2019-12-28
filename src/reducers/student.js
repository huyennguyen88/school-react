import * as types from '../constants/ActionTypes'
var myReducer=(state={},action)=>{
    switch(action.type){
        case types.GET_STUDENT_INFO:
            state = action.student
            return state
        default:
            return state
    }

}
export default myReducer;