import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_CRYPTO_CATEGORY_URL, LOCAL_GET_CITY_URL, LOCAL_GET_PROVINCE_URL, LOCAL_POST_COST_URL } from '../../helper/api';

const initialState = {
  coinLoading: false,
  coinCategoryData: false,
  errorCoinCategory: false,
};

export const coinSlice = createSlice({
  name: 'fare',
  initialState,
  reducers: {
    coinCategoryLoading: (state) => {
      state.coinLoading = true;
    },
    getCoinCategorySuccess: (state, action) => {
      state.coinLoading = false;
      state.coinCategoryData = action.payload;
    },
    errorCoinCategory: (state, action) => {
      state.coinLoading = false;
      state.errorCoin = action.payload;
    },
  },
});

export const { coinCategoryLoading, getCoinCategorySuccess, errorCoinCategory } = coinSlice.actions;
export default coinSlice.reducer;

export const getCoinCategories = (province_id) => {
  return async (dispatch) => {
    dispatch(coinCategoryLoading());
    axios
      .get(GET_CRYPTO_CATEGORY_URL)
      .then((response) => {
        dispatch(getCoinCategorySuccess(response.data));
      })
      .catch((err) => {
        dispatch(errorCoinCategory(err.message));
      });
  };
};
