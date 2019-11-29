import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const logInApi = (user)=>{
    return(dispatch)=>{
        return callApi("users/sign_in","POST",{
            email: user.email,
            password: user.password,
            role: user.role
        }).then(res=>{
            if(res) {
                let data = res.data
                dispatch(logIn(data.user))
                dispatch(role(data.role))
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
export const role = (role)=>{
    return{
        type: types.ROLE,
        role
    }
}
export const logOut = ()=>{
    return{
        type: types.LOG_OUT
    }
}