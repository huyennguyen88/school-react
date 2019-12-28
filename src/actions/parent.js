import callApi from '../utils/apiCaller'
import * as types from '../constants/ActionTypes'
export const getChildrenOfParentApi = (authentication_token)=>{
    return (dispatch)=>{callApi('childrenOfParent/','POST',
    {
        authentication_token: authentication_token
    }).then(res=>{
            if(res){
                dispatch(getChildrenOfParent(res.data))
            }
        }
    )}
}
export const getChildrenOfParent = (childrens)=>{
    return {
        type: types.GET_CHILDREN,
        childrens
    }
}