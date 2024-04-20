'use client';
//components
import LoadingButton from '@mui/lab/LoadingButton';
import Input from './Input';
//hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
import { uiSlice } from '@/GlobalRedux/slices';

const Login = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);

    const submitBtnHandler = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            dispatch(uiSlice.actions.setToken(responseData.token));
            dispatch(uiSlice.actions.setName(responseData.user.name));
            setIsLoading(false);
        } catch (error: any) {
            console.log(error);
            setIsLoading(false);
            setIsError(error);
        }
    };

    return (
        <div style={entireDivStyle}>
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
                    ':hover': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                    ...buttonStyle,
                }}
                loading={isLoading}
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
