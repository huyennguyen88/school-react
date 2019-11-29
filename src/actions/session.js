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