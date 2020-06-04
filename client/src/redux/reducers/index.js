// a file to combine all reducers

import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';


export default combineReducers({
  example: exampleReducer
});