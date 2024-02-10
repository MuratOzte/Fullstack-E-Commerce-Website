'use client';
//components
import { Grid } from '@mui/material';
import EachItem from './EachItem';
//hooks
import { RootState } from '@/GlobalRedux/store';
import { useSelector } from 'react-redux';
//functions
import { filterProducts } from '@/util/filter';
const Products = () => {
    const filter = useSelector((state: RootState) => state.filter);
    const products = useSelector((state: RootState) => state.products.data);

    const filteredProducts = filterProducts(products, filter);
    console.log(filteredProducts);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                justifyContent: 'center',
                marginTop: '60px',
            }}
        >
            {filteredProducts.length === 0 && <p>Selam</p>}
            {filteredProducts.map((e: any) => (
                <EachItem key={e.id} data={e} />
            ))}
        </Grid>
    );
};

export default Products;
