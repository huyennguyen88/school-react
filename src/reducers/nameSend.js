import * as types from "../constants/ActionTypes";
var initialState = '';
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_PERSON:
      state = action.name;
      return state;
    default:
      return state;
  }
};
export default myReducer;
