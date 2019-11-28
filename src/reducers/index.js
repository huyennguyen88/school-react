import {combineReducers} from 'redux';
import classes from './classes'
import session from './session'
const myReducer = combineReducers({
    classes,
    session, //session
});
export default myReducer