import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getGradesApi = (dispatch)=>{
    return(dispatch)=>{
        return callApi('grades','GET',null)
        .then(res => 
            {
                console.log("goi")
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
export const getSubjectsApi =(dispatch)=>{
    return(dispatch)=>{
        return callApi('subjects','GET',null)
        .then(res => {
            dispatch(getSubjects(res.data))
        })
    }
}
export const getSubjects = (subjects)=>
{

    return {
        type: types.GET_SUBJECTS,
        subjects
    }
}