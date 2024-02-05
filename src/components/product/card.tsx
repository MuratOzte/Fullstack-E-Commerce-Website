import React, { useState } from 'react';
import { Grid, Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/GlobalRedux/store';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Card = () => {
    const data = useSelector((state: RootState) => state.products.data);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return data.length === 0 ? (
        <div>loading...</div>
    ) : (
        <Grid
            item
            xs={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                justifyContent: 'center',
            }}
        >
            <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%' }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Image
                    layout="responsive"
                    width={240}
                    height={240}
                    alt={data[0].name}
                    src={data[0].image}
                />
            </motion.div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0 20px',
                }}
            >
                <div>
                    <motion.p
                        animate={{
                            fontSize: isHovered ? '24px' : '32px',
                            color: isHovered ? '#484848' : 'black',
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            fontSize: '32px',
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                            textAlign: 'left',
                            color: '#484848',
                        }}
                    >
                        {data[0].name}
                    </motion.p>
                    <motion.div
                        animate={{
                            scale: isHovered ? 0.8 : 1,
                            x: isHovered ? -14 : 0,
                        }}
                    >
                        <Rating readOnly value={data[0].star} />
                    </motion.div>
                </div>
                <motion.p
                    animate={{ fontSize: isHovered ? '24px' : '32px' }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: '24px',
                        textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
                        lineHeight: '20px',
                        textAlign: 'left',
                        letterSpacing: 'normal',
                        color: '#484848',
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    {data[0].price + '$'}
                </motion.p>
            </div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                    height: '36px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <motion.button
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '90%',
                        height: '90%',
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
                    }}
                >
                    Add Cart
                </motion.button>
            </div>
        </Grid>
    );
};

export default Card;
