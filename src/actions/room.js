import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const getMessApi = (room_id)=>{
    return (dispatch)=>{
        return callApi('getMessInRoom/'+room_id,'GET',null).then(res=>{
            if(res){
                 dispatch(getMess(res.data.messes))
                 dispatch(getPersonInRoom(res.data.users))
            }
        })
    }
}
export const getMess = (messes)=>{
    return{
        type: types.GET_MESSES,
        messes
    }
}
export const getPersonInRoom = (users)=>{
    return{
        type: types.PERSON_IN_ROOM,
        users
    }
}
export const clearMess = ()=>{
    return{
        type: types.CLEAR_MESSES
    }
}
export const sendMess = (mess)=>{
    return{
        type: types.SEND_MESS,
        mess
    }
}