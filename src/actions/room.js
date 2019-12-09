import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const getMessApi = (room_id)=>{
    return (dispatch)=>{
        return callApi('getMessInRoom/'+room_id,'GET',null).then(res=>{
            if(res){
                console.log(res.data)
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