import { createSlice } from '@reduxjs/toolkit';
import { FilterModel, ProductModel } from '@/models/models';
import { PayloadAction, Draft } from '@reduxjs/toolkit';

const initialState: any = {
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
            state: Draft<any>,
            action: PayloadAction<{
                key: keyof any;
                value: number | string;
            }>
        ) => {
            state[action.payload.key] = action.payload.value;
        },
    },
});


export default filterSlice;
