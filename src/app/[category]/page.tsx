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
import Logo from '@/assets/logo.png';
import Filter from '@/components/filter/filter';
import Products from '@/components/product/Products';
import LoadingPage from '@/components/layout/loading';
import { RootState } from '@/GlobalRedux/store';

const CategoryPage: React.FC<{ params: { category: string | null } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category ?? ''))
        return <div>{params?.category} Not Found</div>;

    const data = useSelector((state: RootState) => state.products.data);
    const isLoading = useSelector(
        (state: RootState) => state.products.isloading
    );

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
                <AnimatePresence>
                    {scrollTop > 60 && (
                        <motion.div
                            style={LogoContainerStyle}
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                })
                            }
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <Image
                                src={Logo}
                                height={32}
                                width={32}
                                alt="logo"
                            />
                            <p>E-Commerce</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!data && isLoading ? (
                    <LoadingPage />
                ) : (
                    <>
                        <Grid sx={filterGridStyles} item xs={3}>
                            <Filter />
                        </Grid>
                        <Grid sx={productGridStyles} item xs={9}>
                            <Products />
                        </Grid>
                    </>
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
    height: '100%',
    marginLeft: '30%',
    marginRight: '2%',
    marginTop: '5%',
};

export default CategoryPage;
