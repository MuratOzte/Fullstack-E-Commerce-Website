import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isBurgerContainerOpen: boolean;
}
const initialState: ui = {
    isBurgerContainerOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setBurgerContainerOpen: (state, action) => {
            state.isBurgerContainerOpen = action.payload;
        },
    },
});

export default uiSlice;
