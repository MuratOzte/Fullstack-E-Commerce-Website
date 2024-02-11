'use client';
//components
import LoadingButton from '@mui/lab/LoadingButton';
import Input from './Input';
import LoginRegisterSwitch from './LoginRegisterSwitch';
//hooks
import { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({ username: '', password: '' });

    const submitBtnHandler = () => {
        console.log('submitBtnHandler', data);
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    };

    return (
        <div style={entireDivStyle}>
            <LoginRegisterSwitch />
            <Input
                type="text"
                placeholder="username"
                setData={setData}
                data={data}
            />
            <Input
                type="password"
                placeholder="password"
                setData={setData}
                data={data}
            />
            <LoadingButton
                sx={{
                    ':hover': { backgroundColor: 'white', color: 'black' },
                    ...buttonStyle,
                }}
                loading={false}
                disabled={data.username === '' || data.password === ''}
                variant="contained"
                color="primary"
                onClick={submitBtnHandler}
            >
                {data.username === '' || data.password === ''
                    ? 'Fill in the fields'
                    : 'Login'}
            </LoadingButton>
        </div>
    );
};

const entireDivStyle: React.CSSProperties = {
    border: '2px solid black',
    padding: '16px 64px 16px 64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
};

const buttonStyle: React.CSSProperties = {
    width: '100%',
    marginTop: '16px',
    padding: '2px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: '2px solid black',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'black',
    transition: 'all 0.3s ease-in-out',
};

export default Login;
