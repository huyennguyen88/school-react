import * as types from '../constants/ActionTypes'
var myReducer=(state={},action)=>{
    switch(action.type){
        case types.GET_PARENT:
            state = action.parent
            return state
        default:
            return state
    }

}
export default myReducer;