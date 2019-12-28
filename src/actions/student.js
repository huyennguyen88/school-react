import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getStudentsApi = ()=>{
    return (dispatch)=>{callApi('students','GET',null).then(
        res=>{
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
export const getStudentsInClassApi = (id_class)=>{
    return (dispatch) => {
        return callApi('students_in_lophoc','POST',{
            id_class: id_class
        }).then((res)=>{
            if(res){
                dispatch(getStudentsInClass(res.data))
            }
        })
    }
}
export const getStudentsInClass = (students)=>{
    return{
        type: types.GET_STUDENTS_CLASS,
        students: students
    }
}
export const getStudentsScoreInClassApi = (id_class,token)=>{
    return (dispatch) => {
        return callApi('students_score_in_lophoc','POST',{
            id_class: id_class,
            authentication_token: token
        }).then((res)=>{
            if(res){
                dispatch(getStudentsScoreInClass(res.data))
            }
        })
    }
}
export const getStudentsScoreInClass = (scores)=>{
    return{
        type: types.GET_STUDENTS_SCORES,
        scores: scores
    }
}
// update diem so'
export const updateStudentScoresApi = (id_student,id_subject,score_arr)=>{
    return (dispatch) => {
        return callApi('update_student_score','POST',{
            id_student: id_student,
            id_subject: id_subject,
            score_arr: score_arr
        }).then((res)=>{
            if(res){
                return dispatch(updateStudentScores(res.data))
            }
        })
    }
}
export const updateStudentScores = (score)=>{
    return{
        type: types.UPDATE_STUDENT_SCORES,
        score
    }
}
export const getChildrenDetailApi = (id)=>{
    return (dispatch) => {
        return callApi('students/'+id+'/student_detail','GET',null).then((res)=>{
            if(res){
                dispatch(getChildrenDetail(res.data))
                dispatch(getStudentsInClassApi(res.data.lop_hoc_id))
            }
        })
    }
}
export const getChildrenDetail = (info)=>{
    return{
        type: types.GET_CHILDREN_INFO,
        info : info
    }
}
export const getStudentDetailFromTokenApi = (token)=>{
    return (dispatch) => {
        return callApi('student_detail_with_token/','POST',{
            authentication_token : token
        }).then((res)=>{
            if(res){
                dispatch(getStudentParent(res.data.parent_info))
                // dispatch(getStudentInfo(res.data.student_info))
                dispatch(getStudentsInClassApi(res.data.student_info.lop_hoc_id))
                dispatch(getStudentScoreApi(res.data.student_info.id))
            }
        })
    }
}
export const getStudentParent = (parent) =>
{
    return{
        type: types.GET_PARENT,
        parent : parent
    }
}
export const getStudentInfo = (student) =>
{
    return{
        type: types.GET_STUDENT_INFO,
        student : student
    }
}
export const getStudentScoreApi = (student_id) =>
{
    return (dispatch) => {
        return callApi('students/'+student_id+"/student_score",'GET',null).then((res)=>{
            if(res){
                dispatch(getStudentScore(res.data))
            }
        })
    }
}
export const getStudentScore = (score) =>
{
    return{
        type: types.GET_STUDENT_SCORE,
        score: score
    }
}