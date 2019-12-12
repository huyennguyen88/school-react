import * as types from '../constants/ActionTypes'
export const Search = (keyword)=> {
    return{
        type: types.SEARCH,
        keyword
    }
}