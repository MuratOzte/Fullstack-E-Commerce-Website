import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';

const Acount = () => {
    const router = useRouter();
    const clickHandler = () => {
        router.replace('/account');
    };
    return (
        <Grid
            item
            xs={false}
            md={6}
            sx={{
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
                My Account
            </p>
        </Grid>
    );
};

export default Acount;
