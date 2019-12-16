import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
import students from './students'
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    //Huyen
    grades, // grades
    subjects, // subject
    //DANG
    students,
});
export default myReducer