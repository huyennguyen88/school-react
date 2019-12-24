import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const logInApi = (user)=>{
    return(dispatch)=>{
        return callApi("users/sign_in","POST",{
            email: user.email,
            password: user.password,
        }).then(res=>{
            if(res) {
                console.log(res)
                let data = res.data
                dispatch(logIn(data.user))
                dispatch(roleLogin(data.roles))
                dispatch(teacherNow(data.teacher))
            }
        })
    }
}
export const logIn = (user)=>{
    return{
        type: types.LOG_IN,
        user
    }
}
export const roleLogin = (roles)=>{
    return{
        type: types.ROLE,
        roles
    }
}
export const logOut = ()=>{
    return{
        type: types.LOG_OUT
    }
}
export const profileApi = (token) =>{
    return (dispatch)=>{
        return callApi('users/'+token,'GET',{
            authentication_token: token
        }).then(res=>{
            if (res){
                let data = res.data
                dispatch(profile(data.user))
                dispatch(roleProfile(data.roles))
            }
        })
    }
}
export const profile = (user) =>{
    return {
        type: types.PROFILE,
        user
    }
}
export const roleProfile= (roles)=>{
    return{
        type: types.PROFILE_ROLE,
        roles
    }
}
export const updateProfileApi = (token,user)=>{

    return (dispatch) =>{
        return callApi('users/'+token,'PUT',{
            name: user.name,
            birthday: user.birthday,
            address: user.address,
            password: user.password? user.password : ''
        }).then(res=>{
            if(res){
                dispatch(updateProfile(res.data))
            }
        })
    }
}
export const updateProfile = (user)=>{
    return{
        type: types.UPDATE_PROFILE,
        user
    }
}
export const teacherNow = (teacher)=>{
    return{
        type: types.TEACHER_NOW,
        teacher
    }
}