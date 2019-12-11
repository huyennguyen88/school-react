import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'
import students from './students'
const myReducer = combineReducers({
    //HUYEN
    grades,
    subjects,
    //DANG
    students,
});
export default myReducer