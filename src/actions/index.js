import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getClassesApi = (dispatch)=>{
    return(dispatch)=>{
        return callApi('classes','GET',null)
        .then(res => {dispatch(getClasses(res.data))})
    }
}
export const getClasses =(classes)=>{
    return {
        type: types.GET_CLASSES,
        classes
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