import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { get_groups, api_url } from '../../helpers/yandexApi';
import { GroupsState, GroupsData } from './types';

const initialState: GroupsState = {
   data: [],
   showData: [],
   status: null,
   error: null,
};

export const fetchGroups = createAsyncThunk<GroupsData[], number[]>('groups/fetchGroups', async function (camps: number[], { rejectWithValue }) {
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

      const json = await axios.post(api_url, apiRequest);

      if (json.status != 200) {
         throw new Error('Server error!');
      }
      return json.data.result.AdGroups;

   } catch (error: any) {
      console.warn(error);
      return rejectWithValue(error.message)
   }
});

export const groupsSlice = createSlice({
   name: 'groups',
   initialState,
   reducers: {
      showGroups: (state, action: PayloadAction<number[]>) => {
         let groupsArr = state.data.filter((group) => action.payload.includes(group.CampaignId));
         state.showData = groupsArr;
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
         .addCase(fetchGroups.fulfilled, (state, action: PayloadAction<GroupsData[]>) => {
            state.status = 'resolved';
            state.data = action.payload;
            state.showData = action.payload;
         })
         .addCase(fetchGroups.rejected, (state, action: any) => {
            state.status = 'rejected';
            state.error = action.payload;
         })
   },
});

export const { showGroups, showAllGroups } = groupsSlice.actions;
export default groupsSlice.reducer;