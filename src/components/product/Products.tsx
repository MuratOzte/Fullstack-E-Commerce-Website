//components
import Card from './card';
import { Grid } from '@mui/material';
//hooks
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
const Products = () => {
    const products = useSelector((state: RootState) => state.products.data);
    const isLoading = useSelector(
        (state: RootState) => state.products.isloading
    );
    return (
        <Grid container spacing={2} sx={{ height: '100%' }}>
            {products.map((e) => (
                <Card key={e.id} data={e} />
            ))}
        </Grid>
    );
};

export default Products;
