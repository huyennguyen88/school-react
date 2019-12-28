import * as types from '../constants/ActionTypes'
var initialState = {}
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.GET_CHILDREN_INFO:
            state=action.info
            return state            
        default: return state ;
    }
}
export default myReducer