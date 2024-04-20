import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isBurgerContainerOpen: boolean;
    loginOrRegister: 'login' | 'register';
    token: string;
    name: string;
}
const initialState: ui = {
    isBurgerContainerOpen: false,
    loginOrRegister: 'login',
    token: '',
    name: '',
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
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export default uiSlice;
