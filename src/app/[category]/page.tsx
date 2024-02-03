'use client';
// packages
import { Grid, Container } from '@mui/material';
//hooks
import { useEffect, useState } from 'react';
// functions
import allowedUrl from '@/util/allowedUrl';
// components
import Filter from '@/components/product/filter';

const CategoryPage: React.FC<{ params: { category: string } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category))
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
        <Grid container>
            <Grid
                sx={{
                    backgroundColor: 'red',
                    width: 'auto',
                    height: scrollTop > 60 ? `80vh` : '85vh',
                    marginTop: scrollTop > 60 ? `${scrollTop}px` : '20px',
                    transition: 'all 0.5s ease',
                    overflowY: 'auto',
                    ml: 'auto',
                }}
                item
                xs={2}
            >
                <Filter />
            </Grid>
            <Grid
                sx={{
                    backgroundColor: 'yellow',
                    height: '300vh',
                    overflowY: 'auto',
                    marginX: 'auto',
                    mt: '1.5%',
                }}
                item
                xs={9}
            >
            </Grid>
        </Grid>
    );
};

export default CategoryPage;
