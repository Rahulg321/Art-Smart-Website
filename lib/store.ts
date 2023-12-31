import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/lib/features/counters/counterSlice';
import cartDrawerReducer from '@/lib/features/UI/cart-drawer-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      cartDrawer: cartDrawerReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
