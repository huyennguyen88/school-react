import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.ROLE:
            state = action.roles
            localStorage.setItem('roles',JSON.stringify(state))
            return [...state];
        case types.PROFILE_ROLE:
            
            state = action.roles
            return [...state];            
        default: return [...state] ;
    }
}
export default myReducer