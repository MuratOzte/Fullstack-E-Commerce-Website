import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    return data;
});

export interface products {
    data: any[];
    isloading: boolean;
    error: string;
}

const initialState: products = {
    data: [],
    isloading: false,
    error: '',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isloading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message!;
        });
    },
});

export default productSlice;
