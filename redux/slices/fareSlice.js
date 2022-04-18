import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, GET_CITY_URL, LOCAL_GET_CITY_URL, LOCAL_GET_PROVINCE_URL } from '../../helper/api';

const initialState = {
  loading: false,
  cityLoading: false,
  provinceLoading: false,
  cityData: false,
  provinceData: false,
  fareData: false,
  error: false,
};

export const fareSlice = createSlice({
  name: 'fare',
  initialState,
  reducers: {
    provinceLoading: (state) => {
      state.provinceLoading = true;
    },
    cityLoading: (state) => {
      state.cityLoading = true;
    },
    getCitySuccess: (state, action) => {
      state.cityLoading = false;
      state.cityData = action.payload;
    },
    getProvinceSuccess: (state, action) => {
      state.provinceLoading = false;
      state.provinceData = action.payload;
    },
    getFareDataSuccess: (state, action) => {
      state.loading = false;
      state.fareData = action.payload;
      state.error = false;
    },
    errorData: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { provinceLoading, cityLoading, loading, getFareDataSuccess, errorData, getCitySuccess, getProvinceSuccess } = fareSlice.actions;
export default fareSlice.reducer;

export const fetchCity = (province_id) => {
  return async (dispatch) => {
    dispatch(cityLoading());
    axios
      .get(LOCAL_GET_CITY_URL + `?province=${province_id}`)
      .then((response) => {
        dispatch(getCitySuccess(response.data));
      })
      .catch((err) => {
        dispatch(errorData(err.message));
      });
  };
};

export const fetchProvince = () => {
  return (dispatch) => {
    dispatch(provinceLoading());
    axios
      .get(LOCAL_GET_PROVINCE_URL)
      .then((response) => {
        dispatch(getProvinceSuccess(response.data));
      })
      .catch((err) => {
        dispatch(errorData(err.message));
      });
  };
};
