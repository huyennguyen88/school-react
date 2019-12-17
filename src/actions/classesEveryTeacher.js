import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const getClassesTeacherApi = (token)=>{
   return (dispatch)=>{
    return callApi('lop_hocs_every_teacher','POST',{
        token: token
    }).then(res=>{
        if (res){
           return dispatch(getClassesTeacher(res.data))
        }
    })
   }
}
export const getClassesTeacher = (classes)=>{
    return{
        type: types.GET_CLASSES_TEACHER,
        classes
    }
}