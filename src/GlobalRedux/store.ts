'use client';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productsSlice';
import filterReducer from './slices/filterSlice';
export const store = configureStore({
    reducer: {
        products: productReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
