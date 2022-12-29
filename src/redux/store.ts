import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import groupsReducer from './slices/groupsSlice';
import campaignsReducer from './slices/campaignsSlice';
import statsReducer from './slices/statsSlice';
import unitsReducer from './slices/unitsSlice';

export const store = configureStore({
   reducer: {
      groups: groupsReducer,
      campaigns: campaignsReducer,
      stats: statsReducer,
      units: unitsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();