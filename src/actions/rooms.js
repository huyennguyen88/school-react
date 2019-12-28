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
export const createRoomLopHocApi = (token,id_lophoc)=>{   
    return (dispatch)=>{
        return callApi('create_group_class_chat','POST',{
            authentication_token: token,
            id_lophoc: id_lophoc
        }).then(res=>{
            if(res){
                return dispatch(createRoomLopHoc(res.data))
            }
        })
    }
}
export const createRoomLopHoc = (room)=>{
    return{
        type: types.CREATE_ROOM_LOPHOC,
        room
    }
}
export const createRoom1vs1Api = (token, id_student)=>{
    return (dispatch)=>{
        return callApi('create_room_1vs1','POST',{
            authentication_token: token,
            id_student: id_student
        }).then(res=>{
            if(res){
                return dispatch(createRoom1vs1(res.data))
            }
        })
    }
}
export const createRoom1vs1 = (room)=>{
    return{
        type: types.CREATE_ROOM_1VS1,
        room
    }
}
export const havedFriendApi = (token, id_student)=>{
    return (dispatch) =>{
        return callApi('havedFriend','POST',{
            authentication_token: token,
            id_student: id_student
        }).then(res=>{
            if(res){
                return dispatch(havedFriend(res.data))
            }
        })
    }
}
export const havedFriend = (check)=>{
    return{
        type: types.HAVED_FRIEND,
        check
    }
}