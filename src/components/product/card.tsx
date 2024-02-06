import { Grid, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

//components
import Divider from '../filter/Divider';

interface CardProps {
    id: number;
    name: string;
    image: string;
    star: number;
    price: number;
}

const Card: React.FC<{ data: CardProps }> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    console.log(data);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <Grid item xs={3} sx={entireGridStyle}>
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
                    alt={data.name}
                    src={data.image}
                />
            </motion.div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={nameAndStarStyle}
            >
                <div>
                    <motion.p
                        initial={{ fontSize: '24px', color: '#000000' }}
                        animate={{
                            fontSize: isHovered ? '20px' : '24px',
                            color: isHovered ? '#484848' : '#000000',
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
                    <motion.div
                        initial={{ scale: 1, x: 0 }}
                        animate={{
                            scale: isHovered ? 0.8 : 1,
                            x: isHovered ? -13 : 0,
                        }}
                        transition={{ bounce: '0' }}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                        }}
                    >
                        <Rating readOnly value={data.star} />
                    </motion.div>
                </div>
                <motion.p
                    initial={{ fontSize: '32px' }}
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
                    {data.price + '$'}
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
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '80%',
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
                        marginTop: '7%',
                    }}
                >
                    Add Cart
                </motion.button>
            </div>
        </Grid>
    );
};

const entireGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    border: '2px solid #B4B4B8',
    borderRadius: '8px',
    margin: '15px 30px',
    height: '400px',
};

const nameAndStarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 20px',
};

export default Card;
