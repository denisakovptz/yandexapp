import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnitsState } from './types';


const initialState: UnitsState = {
   balance: 0,
   startBalance: 0,
};

export const unitsSlice = createSlice({
   name: 'units',
   initialState,
   reducers: {
      updateBalance: (state, action: PayloadAction<number>) => {
         state.balance = action.payload;
      },
      allBalance: (state, action: PayloadAction<number>) => {
         state.startBalance = action.payload;
      },
   },
});

export const { updateBalance, allBalance } = unitsSlice.actions;
export default unitsSlice.reducer;