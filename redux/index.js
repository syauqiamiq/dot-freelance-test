import { combineReducers } from '@reduxjs/toolkit';
import { fareReducer } from './slices';

const rootReducer = combineReducers({
  fareReducers: fareReducer,
});

export default rootReducer;
