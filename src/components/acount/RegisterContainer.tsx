import Input from './Input';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const RegisterContainer = () => {
    const [data, setData] = useState({ name: '', username: '', password: '' });

    const submitBtnHandler = async () => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error: any) {
            console.log(error);
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
