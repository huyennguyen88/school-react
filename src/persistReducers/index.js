import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
const rootReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    //Huyen
    grades, // grades
    subjects // subject
});
export default rootReducer