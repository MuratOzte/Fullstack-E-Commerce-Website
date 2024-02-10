import { createSlice } from '@reduxjs/toolkit';
import { FilterModel } from '@/models/models';
import { PayloadAction, Draft } from '@reduxjs/toolkit';

const initialState: FilterModel = {
    minPrice: 0,
    maxPrice: 1500,
    minStar: 0,
    minBattery: 'All',
    minStorage: 'All',
    minRam: 'All',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (
            state: Draft<FilterModel>,
            action: PayloadAction<{
                key: keyof FilterModel;
                value: number | string;
            }>
        ) => {
            state[action.payload.key] = Number(action.payload.value);
        },
    },
});

export default filterSlice;
