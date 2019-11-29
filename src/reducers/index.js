import {combineReducers} from 'redux';
import classes from './classes'
import session from './session'
import role from './role'
const myReducer = combineReducers({
    classes,
    session, //session
    role//role
});
export default myReducer