import {combineReducers} from 'redux';
import session from './session'
import role from './role'
import grades from './grades'
import subjects from './subjects'
const myReducer = combineReducers({
    //TU
    session, //session
    role,//role
     //HUYEN
     grades,
     subjects
})
export default myReducer