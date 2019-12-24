import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import session from './session'
import role from './role'
import rooms from './rooms'
import nameSend from './nameSend'
import room from './room'
import lastMess from './lastMess'
import search from './search'
import students from './students'
import personInRoom from './personInRoom'
import classesEveryTeacher from './classesEveryTeacher'
import studentInClass from './studentsInClass'
import studentScoreInClass from './studentScoreInClass'
import documents from './documents'
import teacher from './teacher';
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    rooms, // room chat
    nameSend, // nameSend dung trong component Received
    lastMess, // get arr last mess
    room, // mess in room 
    personInRoom, // get person in room
    search, // search
    classesEveryTeacher, // get class every teacher
    studentInClass, // get Student in class
    studentScoreInClass, // get score
    //Huyen
    grades, 
    subjects, 
    documents, 
    teacher,
    //DANG
    students,
});
export default myReducer