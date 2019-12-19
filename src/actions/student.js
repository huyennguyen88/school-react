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
    console.log(score_arr)
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
        score: score
    }
}