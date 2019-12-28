import * as types from '../constants/ActionTypes'
import {isEmpty} from 'lodash'
var initialState = [];
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_MESSES:
            state = action.messes
            localStorage.setItem('token_room',JSON.stringify(action.messes.token_room))
            // console.log(JSON.parse(localStorage.getItem('token_room')))
            return [...state]
        case types.CLEAR_MESSES:
            state.length = 0
            return state;
        case types.SEND_MESS:
            var first = [...state][0]
            if(!isEmpty(first) && first.room_id=== action.mess.room_id){
                return [...state,action.mess]
            }
            return [...state]
        default:
            return [...state];
    }
}
export default myReducer