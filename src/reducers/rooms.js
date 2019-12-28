import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.LIST_ROOM:
            state = action.rooms.rooms
            return [...state]
        case types.CREATE_ROOM:
            if(action.room)
            {
                return [...state,action.room]
            }
            return [...state]
        default:
            return state;
    }
}
export default myReducer