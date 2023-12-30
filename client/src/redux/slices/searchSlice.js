import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    result: null,
    error: null,
  },
  reducers: {
    fetchTrailsRequest: (state) => {
      state.loading = true;
    },
    fetchTrailsSuccess: (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.error = null;
    },
    fetchTrailsFailure: (state, action) => {
      state.loading = false;
      state.result = null;
      state.error = action.payload;
    },
  },
});

export const { fetchTrailsRequest, fetchTrailsSuccess, fetchTrailsFailure } = searchSlice.actions;

export const handleFindPhilosophy = (url) => async (dispatch) => {
  dispatch(fetchTrailsRequest());
  try {
    const response = await axios.post('/api/v1/count-trails-url', { url });
    console.log(response)
    dispatch(fetchTrailsSuccess(response.data));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    dispatch(fetchTrailsFailure(message));
  }
};

export default searchSlice.reducer;
