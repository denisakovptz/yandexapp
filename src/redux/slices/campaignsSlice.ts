import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { get_campaigns, api_url } from '../../helpers/yandexApi';
import { CampaignsState, CampData } from './types';
import { updateBalance, allBalance } from './unitsSlice';

const initialState: CampaignsState = {
   data: [],
   campIdList: [],
   status: null,
   error: null,
};

export const fetchCampaigns = createAsyncThunk<CampData[]>('campaigns/fetchCampaigns', async function (_, { dispatch, rejectWithValue }) {
   try {
      const apiRequest = { ...get_campaigns };

      const json = await axios.post(api_url, apiRequest);

      if (json.data.units) {
         const units = json.data.units.split('/')
         dispatch(updateBalance(units[1]));
         dispatch(allBalance(units[2]));
      }

      return json.data.result.Campaigns;

   } catch (error: any) {
      if (error.response.status == 404) {
         console.warn('Error fetching campaigns: ', error.response.data);
         return rejectWithValue(error.response.data)
      } else {
         console.warn('Bad request campaigns:\n', error.response.data.error.error_code, '\n', error.response.data.error.error_string, '\n', error.response.data.error.error_detail);
         return rejectWithValue(error.response.data.error)
      }
   }
});

export const campaignsSlice = createSlice({
   name: 'campaigns',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCampaigns.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchCampaigns.fulfilled, (state, action: PayloadAction<CampData[]>) => {
            state.status = 'resolved';
            state.data = action.payload;
            state.campIdList = action.payload.map((camp) => camp.Id);
         })
         .addCase(fetchCampaigns.rejected, (state, action: any) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { clearError } = campaignsSlice.actions;
export default campaignsSlice.reducer;