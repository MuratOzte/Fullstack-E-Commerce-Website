'use client';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productsSlice';
import filterSlice from './slices/filterSlice';
import uiSlice from './slices/uiSlice';
export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        filter: filterSlice.reducer,
        ui: uiSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
