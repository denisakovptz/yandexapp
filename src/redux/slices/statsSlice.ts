import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { get_group_stats, api_url } from '../../helpers/yandexApi';
import { StatsState, Stats } from './types';

const initialState: StatsState = {
   data: [],
   status: null,
   error: null,
};

export const fetchCampStats = createAsyncThunk<Stats[]>('campstats/fetchCampStats', async function (_, { rejectWithValue }) {
   try {
      const apiRequest = { ...get_group_stats };

      const json = await axios.post(api_url, apiRequest);

      if (json.status != 200) {
         throw new Error('Server error!');
      }

      return json.data.split('\n').slice(1, -2).map((el: string) => el.split('\t'));

   } catch (error: any) {
      if (error.response.status == 404) {
         console.warn('Error fetching statistic: ', error.response.data);
         return rejectWithValue(error.response.data)
      } else {
         console.warn('Bad request statistic:\n', error.response.data.error.error_code, '\n', error.response.data.error.error_string, '\n', error.response.data.error.error_detail);
         return rejectWithValue(error.response.data.error)
      }
   }
});

export const stats = createSlice({
   name: 'stats',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCampStats.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchCampStats.fulfilled, (state, action: PayloadAction<Stats[]>) => {
            state.status = 'resolved';
            state.data = action.payload;
         })
         .addCase(fetchCampStats.rejected, (state, action: any) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { clearError } = stats.actions;
export default stats.reducer;