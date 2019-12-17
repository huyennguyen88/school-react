import callApi from './../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const listRoomApi = (token)=>{    
    return (dispatch)=>{
        return callApi('rooms/'+ token,'GET',null).then(res=>{
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