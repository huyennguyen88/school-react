import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const getTeachersApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getTeachers','GET',null)
        .then(res => 
            {
                if(res.data){
                    dispatch(gettTeachers(res.data))
                }
            })
    }
}

export const gettTeachers =(teachers)=>{
    return {
        type: types.GET_TEACHERS,
        teachers
    }
}

export const getStudentsApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getStudents','GET',null)
        .then(res => 
            {
                if(res.data){
                    dispatch(getStudents(res.data))
                }
            })
    }
}

export const getStudents =(students)=>{
    return {
        type: types.GET_STUDENTS,
        students
    }
}

export const getParentsApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getParents','GET',null)
        .then(res => 
            {
                if(res.data){
                    dispatch(getParents(res.data))
                }
            })
    }
}

export const getParents =(parents)=>{
    return {
        type: types.GET_PARENTS,
        parents
    }
}

export const createUserApi = (user) =>{
    return(dispatch)=>{
        return callApi('admins/createUser','POST',{
            name: user.name,
            email: user.email,
            address: user.address,
            birthday: user.birthday,
            password: user.password,
        })
        .then(res =>
            {
                // console.log(res)
                if(res.data){
                    dispatch(createUser(res.data))
                }
            })
    }
}

export const createUser =(data) =>
{
    switch(data.role)
    {
        case 1:
            return {
                type: types.GET_TEACHERS,
                teachers: data.data
            }
        case 2:
            return {
                type: types.GET_PARENTS,
                parents: data.data
            }
        case 3:
            return {
                type: types.GET_STUDENTS,
                students: data.data
            }
    }
}