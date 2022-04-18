import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, coinReducer } from './slices';

const rootReducer = combineReducers({
  coinReducers: coinReducer,
  authReducers: authReducer,
});

export default rootReducer;
