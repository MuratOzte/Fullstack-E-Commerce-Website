'use client';
import { configureStore } from '@reduxjs/toolkit';
//slices
import { productSlice, filterSlice, uiSlice } from './slices/index';
export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        filter: filterSlice.reducer,
        ui: uiSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
