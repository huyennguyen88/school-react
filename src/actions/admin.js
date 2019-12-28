import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const getTeachersApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getTeachers','GET',null)
        .then(res => 
            {
                if(res){
                    dispatch(getTeachers(res.data))
                }
            })
    }
}

export const getTeachers =(teachers)=>{    
    return {
        type: types.ADMIN_GET_TEACHERS,
        teachers
    }
}

export const getStudentsApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getStudents','GET',null)
        .then(res => 
            {
                if(res){
                    dispatch(getStudents(res.data))
                }
            })
    }
}

export const getStudents =(students)=>{
    return {
        type: types.ADMIN_GET_STUDENTS,
        students
    }
}

export const getParentsApi = ()=>{
    return(dispatch)=>{
        return callApi('admins/getParents','GET',null)
        .then(res => 
            {
                if(res){
                    dispatch(getParents(res.data))
                }
            })
    }
}

export const getParents =(parents)=>{
    return {
        type: types.ADMIN_GET_PARENTS,
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
            role: user.role
        })
        .then(res =>
            {
                if(res){
                    dispatch(User(res.data))
                }
            })
    }
}
export const updateUserApi = (user) =>{
    return(dispatch)=>{
        return callApi('admins/updateUser','POST',{
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            birthday: user.birthday,
            role: user.role
        })
        .then(res =>
            {
                if(res){
                    dispatch(User(res.data))
                }
            })
    }
}
export const User =(data) =>
{
    switch(data.role)
    {
        case 1:
            return {
                type: types.ADMIN_GET_TEACHERS,
                teachers: data.data
            }
        case 2:
            return {
                type: types.ADMIN_GET_PARENTS,
                parents: data.data
            }
        case 3:
            return {
                type: types.ADMIN_GET_STUDENTS,
                students: data.data
            }
    }
}