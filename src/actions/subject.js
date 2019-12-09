import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'

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