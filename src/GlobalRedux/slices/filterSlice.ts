import { createSlice } from '@reduxjs/toolkit';
import { FilterModel } from '@/models/models';

const initialState: FilterModel = {
    minPrice: 0,
    maxPrice: 1500,
    minStar: 0,
    minBattery: 0,
    minStorage: 0,
    minRam: 0,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // Add your reducers here
    },
});
