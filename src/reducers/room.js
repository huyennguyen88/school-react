import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_MESSES:
            state = action.messes.messes
            localStorage.setItem('token_room',JSON.stringify(action.messes.token_room))
            // console.log(JSON.parse(localStorage.getItem('token_room')))
            return [...state]
        case types.CLEAR_MESSES:
            state.length = 0
            return state;
        case types.SEND_MESS:
            console.log([...state,action.mess])
            return [...state,action.mess]
        default:
            return [...state];
    }
}
export default myReducer