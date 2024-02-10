import { createSlice } from '@reduxjs/toolkit';
import { FilterModel, ProductModel } from '@/models/models';
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
        filterProducts: (state: Draft<FilterModel>, action) => {
            const filteredProducts = action.payload.filter(
                (product: ProductModel) => {
                    return (
                        product.price >= state.minPrice &&
                        product.price <= state.maxPrice &&
                        product.star >= state.minStar &&
                        (state.minBattery === 'All' ||
                            product.battery === state.minBattery) &&
                        (state.minStorage === 'All' ||
                            product.storage === state.minStorage) &&
                        (state.minRam === 'All' || product.ram === state.minRam)
                    );
                }
            );
            console.log(filteredProducts);
        },
    },
});

export default filterSlice;
