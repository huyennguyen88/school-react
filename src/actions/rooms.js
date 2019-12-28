import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const listRoomApi = (token)=>{   
    return (dispatch)=>{
        return callApi('rooms/getRoom','POST',{
            authentication_token: token
        }).then(res=>{
            if(res){
                return dispatch(listRoom(res.data))
            }
        })
    }
}
export const listRoom = (rooms)=>{
    return{
        type: types.LIST_ROOM,
        rooms
    }
}
export const createRoomApi = (token,id_lophoc)=>{   
    return (dispatch)=>{
        return callApi('create_group_class_chat','POST',{
            authentication_token: token,
            id_lophoc: id_lophoc
        }).then(res=>{
            if(res){
                return dispatch(createRoom(res.data))
            }
        })
    }
}
export const createRoom = (room)=>{
    return{
        type: types.CREATE_ROOM,
        room
    }
}