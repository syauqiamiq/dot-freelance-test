import { combineReducers } from '@reduxjs/toolkit';
import { questionReducers } from './slices';

const rootReducer = combineReducers({
  questionReducers: questionReducers,
});

export default rootReducer;
