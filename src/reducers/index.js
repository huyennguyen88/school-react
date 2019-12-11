import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
import rooms from './rooms'
import nameSend from './nameSend'
import room from './room'
import lastMess from './lastMess'
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    rooms, // room chat
    nameSend, // nameSend dung trong component Received
    lastMess, // get arr last mess
    room, // mess in room
    //Huyen
    grades, // grades
    subjects // subject
});
export default myReducer