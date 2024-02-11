'use client';
//assets
import logo from '@/assets/logo.png';
//animation lib
import { AnimatePresence, motion } from 'framer-motion';
//components
import Image from 'next/image';
import Link from 'next/link';
import BurgerTsx from './Burger';
import BurgerContainer from './BurgerContainer';
import Acount from './Acount';
//hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//models
import { RootState } from '@/GlobalRedux/store';

const BurgerBar = () => {
    const isBurgerContainerOpen = useSelector(
        (state: RootState) => state.ui.isBurgerContainerOpen
    );

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

    return (
        <>
            <motion.nav
                style={navStyle}
                animate={{ y: scrollTop > 60 ? -100 : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Link href="/" style={logoStyle}>
                    <Image src={logo} alt="logo" width={32} height={32} />
                </Link>
                <AnimatePresence>
                    {isBurgerContainerOpen && <BurgerContainer />}
                </AnimatePresence>
                <BurgerTsx />
                <Acount />
            </motion.nav>
        </>
    );
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '2px solid #e0e0e0',
    padding: 10,
    zIndex: 5,
    position: 'fixed',
    width: '100%',
    top: 0,
    height: 50,
};

const logoStyle: React.CSSProperties = {
    position: 'absolute',
    left: '10%',
    cursor: 'pointer',
};

export default BurgerBar;
