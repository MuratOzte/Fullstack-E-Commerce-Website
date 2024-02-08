'use client';
// packages
import { Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
//hooks
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// functions
import { fetchProducts } from '@/GlobalRedux/slices/productsSlice';
import allowedUrl from '@/util/allowedUrl';
// components
import { RootState } from '@/GlobalRedux/store';
import Logo from '@/assets/logo.png';
import Filter from '@/components/filter/filter';
import LoadingPage from '@/components/layout/loading';
import Products from '@/components/product/Products';
import FilterDrawer from '@/components/filter/FilterDrawer';

const CategoryPage: React.FC<{ params: { category: string | null } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category ?? ''))
        return <div>{params?.category} Not Found</div>;

    const data = useSelector((state: RootState) => state.products.data);

    const dispatch = useDispatch();
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        dispatch(fetchProducts() as any);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Grid container>
                {data.length == 0 ? (
                    <LoadingPage />
                ) : (
                    <div id="selam">
                        <FilterDrawer />
                        <Products />
                    </div>
                )}
            </Grid>
        </>
    );
};

const LogoContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '6%',
    left: '8%',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
};

const filterGridStyles: React.CSSProperties = {
    backgroundColor: '#C7C8CC',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    width: '20%',
    height: '85%',
    transition: 'all 0.3s ease',
    marginTop: '5%',
    marginLeft: '2%',
    position: 'fixed',
};

const productGridStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    marginTop: '5%',
    marginLeft: '25%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2%',
    transition: 'all 0.3s ease',
};

export default CategoryPage;
