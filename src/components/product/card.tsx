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
                container
                justifyContent="center"
                sx={{
                    backgroundColor: '#DCF2F1',
                    border: '2px solid #B4B4B8',
                    width: '20%',
                    margin: {
                        xs: '15px',
                        md: '15px',
                    },
                }}
            >
                <Grid item xs={12} display="flex" justifyContent="center">
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '70%' }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <Image
                            layout="responsive"
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
            </Grid>
            <br />
        </>
    );
};

export default Card;
