import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getGradesApi = (dispatch)=>{
    return(dispatch)=>{
        return callApi('grades','GET',null)
        .then(res => 
            {
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
export const logInApi = (user)=>{
    console.log(user)
    return(dispatch)=>{
        return callApi("users/sign_in","POST",{
            email: user.email,
            password: user.password,
            role: user.role
        }).then(res=>{
            if(res) console.log(res)
        })
    }
}