import { Grid, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface CardProps {
    id: number;
    name: string;
    image: string;
    star: number;
    price: number;
    comments: number[];
}

const EachItem: React.FC<{ data: CardProps }> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <>
            <Grid
                item
                md={2}
                xs={6}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                container
                justifyContent="center"
                sx={{
                    backgroundColor: '#DCF2F1',
                    marginX: {
                        xs: '10px',
                        md: '40px',
                    },
                    marginY: '20px',
                    maxWidth: {
                        xs: '42%',
                        md: '200px',
                    },
                    padding: '0!important',
                    height: {
                        xs: '270px',
                    },
                }}
            >
                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    sx={{ backgroundColor: '#f1f5f9' }}
                    padding={0}
                >
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            layout="responsive"
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                            height={120}
                            width={120}
                            alt={data.name}
                            src={data.image}
                        />
                    </motion.div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xs: 'flex-start',
                            md: 'center',
                        },
                        ml: {
                            xs: '15%',
                            md: '0',
                        },
                        textAlign: 'left',
                        maxWidth: {
                            xs: '100%',
                        },
                    }}
                >
                    <motion.p
                        initial={{ fontSize: '24px', color: '#000000' }}
                        animate={{
                            fontSize: isHovered ? '20px' : '24px',
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        style={{
                            fontSize: '20px',
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                            textAlign: 'left',
                            color: '#484848',
                        }}
                    >
                        {data.name}
                    </motion.p>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        ml: {
                            xs: '13%',
                            md: '3%',
                        },
                        mt: {
                            xs: '5%',
                            md: '10%',
                        },
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        animate={{
                            scale: isHovered ? 0.9 : 1,
                            x: isHovered ? -4 : 0,
                        }}
                        transition={{ bounce: '0' }}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Rating readOnly size={'small'} value={data.star} />
                    </motion.div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xs: 'flex-start',
                            md: 'flex-end',
                        },
                        ml: {
                            xs: '15%',
                            md: '0',
                        },
                        mt: '5%',
                        alignItems: 'center',
                        textAlign: 'right',
                    }}
                >
                    <motion.p
                        initial={{ fontSize: '24px' }}
                        animate={{
                            fontSize: isHovered ? '20px' : '24px',
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: 'flex',
                            fontSize: '24px',
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                            lineHeight: '20px',
                            textAlign: 'right',
                            justifyContent: 'flex-end',
                            color: '#484848',
                            fontFamily: 'Arial, sans-serif',
                            marginRight: '5%',
                        }}
                    >
                        {data.price + '$'}
                    </motion.p>
                </Grid>
                <Grid
                    item
                    xs={12}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        height: {
                            xs: '15%',
                        },
                        mb: {
                            xs: '10%',
                        },
                        mx: {
                            xs: '5%',
                        },
                    }}
                >
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? -10 : -5,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            width: '200px',
                            height: '60%',
                            backgroundColor: 'black',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 500,
                            fontFamily: 'Arial, sans-serif',
                            letterSpacing: 'normal',
                            textAlign: 'center',
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '8px',
                            marginTop: '7%',
                        }}
                    >
                        Add Cart
                    </motion.button>
                </Grid>
            </Grid>
        </>
    );
};

export default EachItem;
