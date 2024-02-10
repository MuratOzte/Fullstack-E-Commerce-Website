'use client';
//components
import { Grid } from '@mui/material';
import EachItem from './EachItem';
//hooks
import { RootState } from '@/GlobalRedux/store';
import { useSelector } from 'react-redux';
//functions
import { filterProducts } from '@/util/filter';
import { useEffect, useState } from 'react';
import { ProductModel } from '@/models/models';
const Products = () => {
    const filter = useSelector((state: RootState) => state.filter);
    const products = useSelector((state: RootState) => state.products.data);

    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(
        []
    );

    useEffect(() => {
        const url = window.location.pathname.split('/')[1];
        const data = filterProducts(products, filter, url!);
        setFilteredProducts(data);
    }, [window.location.pathname, filter, products]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                justifyContent: 'center',
                marginTop: '60px',
            }}
        >
            {filteredProducts.length === 0 && (
                <p style={noProductStyle}>No Product Found</p>
            )}
            {filteredProducts.length > 0 &&
                filteredProducts.map((e: any) => (
                    <EachItem key={e.id} data={e} />
                ))}
        </Grid>
    );
};

const noProductStyle: React.CSSProperties = {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    border: '2px solid grey',
    padding: '10px',
    borderRadius: '10px',
};

export default Products;
