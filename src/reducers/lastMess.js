import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.LIST_ROOM:
            state = action.rooms.lastMessArr
            return [...state]
        case types.SEND_MESS:
            var index = state.findIndex((mess,index)=>{
                return action.mess.room_id === mess.room_id
            })
            state[index] = action.mess
            return [...state]
        default:
            return state;
    }
}
export default myReducer