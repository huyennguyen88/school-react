import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
import rooms from './rooms'
import messes from './messes'
import room from './room'
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    rooms, // room chat
    messes, // message
    room, // mess in room
    //Huyen
    grades, // grades
    subjects // subject
});
export default myReducer