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
import childrenOfParent from './childrenOfParent'
import children from './children'
import studentParent from './studentParent'
import studentScore from './studentScore'
import checkHaveFriend from './checkHavedFriend'
import allDocuments from './allDocuments'
import teacher from './teacher';
import documentStore from './documentStore';
const myReducer = combineReducers({
    //Tu
    session, //session
    role,//role
    rooms, // room chat
    nameSend, // nameSend dung trong component Received
    lastMess, // get arr last mess
    room, // mess in room 
    personInRoom, // get person in room
    checkHaveFriend, //checking have friend
    search, // search
    classesEveryTeacher, // get class every teacher
    studentInClass, // get Student in class
    studentScoreInClass, // get score
    //Huyen
    grades, 
    subjects, 
    allDocuments,
    teacher,
    documentStore,
    //DANG
    students,
    childrenOfParent,
    children,
    studentParent,
    studentScore
});
export default myReducer