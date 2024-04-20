'use client';
import { Grid, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Acount = () => {
    const router = useRouter();

    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem('token') || '');
    }, [localStorage.getItem('token')]);

    const clickHandler = () => {
        router.replace('/account');
    };

    window.addEventListener('storage', () => {
        console.log('merah');

        setToken(localStorage.getItem('token') || '');
    });

    const exitClickHandler = () => {
        localStorage.clear();
        setToken('');
    };

    window.addEventListener;

    return (
        <Grid
            item
            xs={false}
            md={6}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                position: 'absolute',
                right: {
                    xs: '5%',
                    md: '10%',
                },
            }}
        >
            <p
                style={{
                    color: 'black',
                    alignItems: 'center',
                    display: 'flex',
                    cursor: 'pointer',
                }}
                onClick={clickHandler}
            >
                <PersonIcon color="action" fontSize="large" />
                {localStorage.getItem('name') || 'Sign In'}
            </p>
            {token ? (
                <IconButton onClick={exitClickHandler}>
                    <ExitToAppIcon color="disabled" />
                </IconButton>
            ) : (
                ''
            )}
        </Grid>
    );
};

export default Acount;
