import {combineReducers} from 'redux';
import grades from './grades'
import subjects from './subjects'

const myReducer = combineReducers({
    //HUYEN
    grades,
    subjects
});
export default myReducer