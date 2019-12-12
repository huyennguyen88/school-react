import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getStudentsApi = ()=>{
    return (dispatch)=>{callApi('students','GET',null).then(
        res=>{
            console.log(res.data)
            dispatch(getStudents(res.data))
        }
    )}
}
export const getStudents = (students)=>{
    return {
        type: types.GET_STUDENTS,
        students
    }
}