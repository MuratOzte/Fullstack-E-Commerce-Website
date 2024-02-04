'use client';
// packages
import { Grid, Container } from '@mui/material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
//hooks
import React, { useEffect, useState } from 'react';
// functions
import allowedUrl from '@/util/allowedUrl';
// components
import Filter from '@/components/product/filter';
import Logo from '@/assets/logo.png';

const CategoryPage: React.FC<{ params: { category: string | null } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category ?? ''))
        return <div>{params?.category} Not Found</div>;

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // console.log(scrollTop.toFixed(0));
    }, [scrollTop]);

    return (
        <>
            <Grid container>
                <AnimatePresence>
                    {scrollTop > 60 && (
                        <motion.div
                            style={LogoContainerStyle}
                            onClick={() => window.scrollTo(0, 0)}
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
                <Grid sx={filterGridStyles} item xs={2}>
                    <Filter />
                </Grid>
                <Grid sx={productGridStyles} item xs={9}></Grid>
            </Grid>
        </>
    );
};

const LogoContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '6%',
    left: '5%',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
};

const filterGridStyles: React.CSSProperties = {
    backgroundColor: 'red',
    width: '20%',
    height: '85%',
    transition: 'all 0.3s ease',
    overflowY: 'scroll',
    marginTop: '5%',
    marginLeft: '2%',
    position: 'fixed',
};

const productGridStyles: React.CSSProperties = {
    backgroundColor: 'yellow',
    height: '300vh',
    overflowY: 'auto',
    margin: 'auto',
    marginLeft: '20%',
    marginTop: '5%',
};

export default CategoryPage;
