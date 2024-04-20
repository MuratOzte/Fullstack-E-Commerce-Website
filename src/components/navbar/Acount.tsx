'use client';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, IconButton } from '@mui/material';
//hooks
import { uiSlice } from '@/GlobalRedux/slices';
import { RootState } from '@/GlobalRedux/store';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const Acount = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const token = useSelector((state: RootState) => state.ui.token);
    const name = useSelector((state: RootState) => state.ui.name);

    const clickHandler = () => {
        router.replace('/account');
    };

    const exitClickHandler = () => {
        localStorage.clear();
        dispatch(uiSlice.actions.setToken(''));
        dispatch(uiSlice.actions.setName(''));
    };

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
                {name || 'Sign In'}
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
