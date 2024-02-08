//components
import { Grid } from '@mui/material';
import EachItem from './EachItem';
//hooks
import { RootState } from '@/GlobalRedux/store';
import { useSelector } from 'react-redux';
const Products = () => {
    const products = useSelector((state: RootState) => state.products.data);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                justifyContent: 'center',
                marginTop: '60px',
            }}
        >
            {products.map((e) => (
                <EachItem key={e.id} data={e} />
            ))}
        </Grid>
    );
};

export default Products;
