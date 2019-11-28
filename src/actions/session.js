import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'
import Axios from 'axios'

export const logInApi = (user)=>{
    return(dispatch)=>{
        return callApi("parents","GET",null).then(res=>{
            if(res) {
                console.log(res)
                //admin@gmail.com username day
                //123456 password day
                // let data = res.data
                // dispatch(logIn(data.user))
                // dispatch(role(data.role))
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
        type: types.LOG_IN,
        role
    }
}