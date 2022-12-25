import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import groupsReducer from './slices/groupsSlice';
import campaignsReducer from './slices/campaignsSlice';
import campstatsReducer from './slices/campaignStats';

export const store = configureStore({
   reducer: {
      groups: groupsReducer,
      campaigns: campaignsReducer,
      campstats: campstatsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();