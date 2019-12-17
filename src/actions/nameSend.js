import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'

export const nameSendApi =(user_token)=>{
    return(dispatch)=>{
        return callApi('getSendPerson/'+user_token,'GET',{
            user_token: user_token
        })
        .then(res => {
           if(res){
               dispatch(nameSend(res.data))
           }
        })
    }
}
export const nameSend = (name)=>
{
    return {
        type: types.SEND_PERSON,
        name
    }
}