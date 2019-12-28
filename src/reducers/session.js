import * as types from '../constants/ActionTypes'
var initialState = {}
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.LOG_IN:
            state = action.user;
            localStorage.setItem('token',JSON.stringify(state.authentication_token))
            return state;
        case types.LOG_OUT:            
            // localStorage.removeItem('token');
            // localStorage.removeItem('roles');
            localStorage.clear();
            state = {}
            return state
        case types.PROFILE:
            state = action.user;
            return state;
        case types.UPDATE_PROFILE:
            state = action.user
            return state;
        // case types.SIGN_UP:
        //     state = action.newUser;
        //     return state
        default: return state; 
    }
}
export default myReducer