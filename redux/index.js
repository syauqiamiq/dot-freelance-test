import { combineReducers } from '@reduxjs/toolkit';
import { coinReducer } from './slices';

const rootReducer = combineReducers({
  coinReducers: coinReducer,
});

export default rootReducer;
