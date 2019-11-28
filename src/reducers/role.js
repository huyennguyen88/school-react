import * as types from '../constants/ActionTypes'
var initialState = {}
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.LOG_IN:
            state = action.role
            console.log(state)
            return state;
        default: return state; 
    }
}
export default myReducer