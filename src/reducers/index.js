import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
import admin from './admin'
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    //Huyen
    grades, // grades
    subjects, // subject
    //Hieu
    admin
});
export default myReducer