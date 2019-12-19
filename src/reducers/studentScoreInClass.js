import * as types from '../constants/ActionTypes'
var initialState = []
var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.GET_STUDENTS_SCORES:
            state = action.scores
            return [...state]
        case types.UPDATE_STUDENT_SCORES:
            var index = [...state].findIndex((e)=>{
                return action.score.mssv === e.mssv
            })
            state[index] = action.score;
            return [...state]
        default:
            return [...state];
    }
}
export default myReducer