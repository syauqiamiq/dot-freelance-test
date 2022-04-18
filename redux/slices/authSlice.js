import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AuthSuccess: (state) => {
      state.isAuth = true;
    },
    AuthLogout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { AuthSuccess, AuthLogout } = authSlice.actions;
export default authSlice.reducer;
