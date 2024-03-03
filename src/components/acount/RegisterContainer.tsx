import Input from './Input';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert } from '@mui/material';

const RegisterContainer = () => {
    const [data, setData] = useState({ name: '', username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);

    const submitBtnHandler = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                setIsError(errorData.message || 'An error occurred');
            }

            setIsLoading(false);
            const responseData = await response.json();
            setIsError(null);
        } catch (error: any) {
            setIsLoading(false);
        }
    };

    return (
        <div style={entireDivStyle}>
            <Input
                type="text"
                placeholder="name"
                data={data}
                setData={setData}
            />
            <Input
                type="text"
                placeholder="username"
                data={data}
                setData={setData}
            />
            <Input
                type="password"
                placeholder="password"
                data={data}
                setData={setData}
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
            {isError && (
                <Alert
                    sx={{
                        width: '100%',
                        marginTop: '16px',
                    }}
                    severity="error"
                >
                    {isError}
                </Alert>
            )}
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

export default RegisterContainer;
