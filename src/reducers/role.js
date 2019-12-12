import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.ROLE:
            state = action.roles
            return [...state];
        case types.PROFILE_ROLE:
            
            state = action.roles
            return [...state];            
        default: return [...state] ;
    }
}
export default myReducer