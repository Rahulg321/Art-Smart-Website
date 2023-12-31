import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartDrawerState {
  showCart: boolean;
}

// Define the initial state using that type
const initialState: CartDrawerState = {
  showCart: false,
};

export const cartDrawerSlice = createSlice({
  name: 'cartDrawer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartDrawerActions = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
