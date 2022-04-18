import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: false,
  error: false,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
});

export default questionSlice.reducer;
