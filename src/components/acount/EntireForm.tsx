'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
import LoginRegisterSwitch from './LoginRegisterSwitch';
//compoenents
import Login from './LoginContainer';
import Register from './RegisterContainer';

const EntireForm = () => {
    const isLoginOrRegister = useSelector(
        (state: RootState) => state.ui.loginOrRegister
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
                border: '2px solid #ccc', // Add border style
                borderRadius: '10px', // Optional: Add border radius for rounded corners
                padding: '20px',
            }}
        >
            <LoginRegisterSwitch />
            {isLoginOrRegister === 'login' && <Login />}
            {isLoginOrRegister === 'register' && <Register />}
        </div>
    );
};

export default EntireForm;
