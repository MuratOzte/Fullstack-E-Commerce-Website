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
        filterProducts: (
            state: Draft<FilterModel>,
            action: PayloadAction<ProductModel[]>
        ) => {
            const filteredProducts = action.payload.filter(
                (product: ProductModel) =>
                    product.price <= state.maxPrice &&
                    product.price >= state.minPrice &&
                    product.star >= state.minStar &&
                    (state.minBattery === 'All' ||
                        extractNumericPart(product.battery) >=
                            extractNumericPart(String(state.minBattery))) &&
                    (state.minStorage === 'All' ||
                        extractNumericPart(product.storage) >=
                            extractNumericPart(String(state.minStorage))) &&
                    (state.minRam === 'All' ||
                        extractNumericPart(product.ram) >=
                            extractNumericPart(String(state.minRam)))
            );
            console.log(filteredProducts);
        },
    },
});

function extractNumericPart(str: string): number {
    const matches = str.match(/\d+/);
    return matches ? parseInt(matches[0]) : 0;
}

export default filterSlice;
