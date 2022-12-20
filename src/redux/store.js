import { configureStore } from '@reduxjs/toolkit';

import groupsReducer from './slices/groupsSlice';
import campaignsReducer from './slices/campaignsSlice';

export const store = configureStore({
   reducer: {
      groups: groupsReducer,
      campaigns: campaignsReducer,
   },
});