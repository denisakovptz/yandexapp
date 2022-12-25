import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { arrayBuffer } from 'stream/consumers';
import { get_group_stats, api_url } from '../../helpers/yandexApi';
import { CampaignsStatsState, CampData, CampStats } from './types';

const initialState: CampaignsStatsState = {
   data: [],
   status: null,
   error: null,
};

export const fetchCampStats = createAsyncThunk<CampStats[]>('campstats/fetchCampStats', async function (_, { rejectWithValue }) {
   try {
      const apiRequest = { ...get_group_stats };

      const json = await axios.post(api_url, apiRequest);

      if (json.status != 200) {
         throw new Error('Server error!');
      }
      console.log(json.data.split('\n').slice(1, -2).map((el: string) => el.split('\t')));

      return json.data.split('\n').slice(1, -2).map((el: string) => el.split('\t'));

   } catch (error: any) {
      console.warn(error);
      return rejectWithValue(error.message)
   }
});

export const campaignsStats = createSlice({
   name: 'campstats',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCampStats.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchCampStats.fulfilled, (state, action: PayloadAction<CampStats[]>) => {
            state.status = 'resolved';
            state.data = action.payload;
         })
         .addCase(fetchCampStats.rejected, (state, action: any) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { } = campaignsStats.actions;
export default campaignsStats.reducer;