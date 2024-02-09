import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isOpen: boolean;
}
const initialState: ui = {
    isOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleBurger: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export default uiSlice.reducer;
