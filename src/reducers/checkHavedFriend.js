import * as types from '../constants/ActionTypes'
var initialState = false
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.HAVED_FRIEND:
            state = action.check;
            return state            
        default: return state ;
    }
}
export default myReducer