import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { get_groups, api_url } from '../../helpers/yandexApi';

const initialState = {
   data: [],
   showData: [],
   status: null,
   error: null,
};

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async function (camps, { rejectWithValue }) {
   try {
      const apiRequest = {
         ...get_groups,
         ["apiSet"]: {
            ...get_groups["apiSet"],
            ["params"]: {
               ...get_groups["apiSet"]["params"],
               ["SelectionCriteria"]: {
                  ...get_groups["apiSet"]["params"]["SelectionCriteria"],
                  ["CampaignIds"]: camps
               }
            }
         }
      };

      const json = await axios.post(api_url, apiRequest, { 'Content-Type': 'application/json' });

      if (json.status != 200) {
         throw new Error('Server error!');
      }
      return json.data.result.AdGroups;

   } catch (error) {
      console.warn(error);
      return rejectWithValue(error.message)
   }
});

export const groupsSlice = createSlice({
   name: 'groups',
   initialState,
   reducers: {
      showGroups: (state, action) => {
         let arr = state.data.filter(val => val.CampaignId == action.payload);
         state.showData = arr;
      },
      showAllGroups: (state) => {
         state.showData = state.data;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchGroups.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchGroups.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
            state.showData = action.payload;
         })
         .addCase(fetchGroups.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { showGroups, showAllGroups } = groupsSlice.actions;
export default groupsSlice.reducer;