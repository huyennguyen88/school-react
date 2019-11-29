import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getGradesApi = (dispatch)=>{
    return(dispatch)=>{
        return callApi('grades','GET',null)
        .then(res => 
            {
                // console.log(res)
                dispatch(getGrades(res.data))
            })
    }
}
export const getGrades =(grades)=>{
    return {
        type: types.GET_GRADES,
        grades
    }
}