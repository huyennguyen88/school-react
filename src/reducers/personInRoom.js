import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.PERSON_IN_ROOM:
            state = action.users
            return [...state]
        default:
            return state;
    }
}
export default myReducer