import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isBurgerContainerOpen: boolean;
    loginOrRegister: 'login' | 'register';
}
const initialState: ui = {
    isBurgerContainerOpen: false,
    loginOrRegister: 'login',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setBurgerContainerOpen: (state, action) => {
            state.isBurgerContainerOpen = action.payload;
        },
        setLoginOrRegister: (state, action) => {
            state.loginOrRegister = action.payload;
        },
    },
});

export default uiSlice;
