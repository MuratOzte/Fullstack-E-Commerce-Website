import { Grid, Rating, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface CardProps {
    id: number;
    name: string;
    image: string;
    star: number;
    price: number;
    dealer: string;
}

const Card: React.FC<{ data: CardProps }> = ({ data }) => {
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
                md={3}
                xs={4}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                container
                justifyContent="center"
                sx={{
                    backgroundColor: '#DCF2F1',
                    margin: {
                        xs: '15px',
                        md: '40px',
                    },
                    maxWidth: '150px',
                    padding: '0!important',
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
                        justifyContent: 'center',
                        textAlign: 'left',
                        backgroundColor: {
                            xs: 'red',
                            md: 'yellow',
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
                <Grid item xs={6}>
                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        animate={{
                            scale: isHovered ? 0.8 : 1,
                            x: isHovered ? -13 : 0,
                        }}
                        transition={{ bounce: '0' }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'left',
                        }}
                    >
                        <Rating readOnly value={data.star} />
                    </motion.div>
                </Grid>
                <Grid item xs={6}>
                    <motion.p
                        initial={{ fontSize: '32px' }}
                        animate={{ fontSize: isHovered ? '24px' : '32px' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            fontSize: '24px',
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                            lineHeight: '20px',
                            textAlign: 'right',
                            color: '#484848',
                            fontFamily: 'Arial, sans-serif',
                            marginRight: '5%',
                        }}
                    >
                        {data.price + '$'}
                    </motion.p>
                </Grid>
                <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        height: '50px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
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
                </div>
            </Grid>
        </>
    );
};

export default Card;
