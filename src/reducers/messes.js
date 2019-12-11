import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        //cai nay  chua su dung
        case types.GET_MESSES:
            state = action.messes.messes
            return [...state]
        default:
            return state;
    }
}
export default myReducer