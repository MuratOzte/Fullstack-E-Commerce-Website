//packages
import { Grid } from '@mui/material';
//functions
import allowedUrl from '@/util/allowedUrl';
//components
import Filter from '@/components/product/filter';

const CategoryPage: React.FC<{ params: { category: string } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category))
        return <div>{params?.category} Not Found</div>;

    return (
        <Grid container>
            <Grid
                sx={{
                    backgroundColor: 'red',
                    width: 'auto',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                item
                xs={2}
            >
                <Filter />
            </Grid>
            <Grid sx={{ backgroundColor: 'yellow' }} item xs={10}></Grid>
        </Grid>
    );
};

export default CategoryPage;
