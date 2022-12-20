import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { get_campaigns, api_url } from '../../helpers/yandexApi';

const initialState = {
   data: [],
   campIdList: [],
   status: null,
   error: null,
};

export const fetchCampaigns = createAsyncThunk('campaigns/fetchCampaigns', async function (_, { rejectWithValue }) {
   try {
      const apiRequest = { ...get_campaigns };

      const json = await axios.post(api_url, apiRequest, { 'Content-Type': 'application/json' });


      if (json.status != 200) {
         throw new Error('Server error!');
      }
      return json.data.result.Campaigns;

   } catch (error) {
      console.warn(error);
      return rejectWithValue(error.message)
   }
});

export const campaignsSlice = createSlice({
   name: 'campaigns',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCampaigns.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchCampaigns.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
            state.campIdList = action.payload.map(camp => camp.Id);
         })
         .addCase(fetchCampaigns.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { } = campaignsSlice.actions;
export default campaignsSlice.reducer;