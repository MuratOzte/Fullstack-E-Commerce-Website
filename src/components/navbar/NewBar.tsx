'use client';
import logo from '@/assets/logo.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BurgerTsx from './Burger';
import BurgerContainer from './BurgerContainer';

const BurgerBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onclick = (boolean: boolean) => {
        setIsOpen(boolean);
    };

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
                <Link href="/" style={logoLinkStyle}>
                    <Image src={logo} alt="logo" width={32} height={32} />
                </Link>
                <AnimatePresence>
                    {isOpen && <BurgerContainer onclick={onclick} />}
                </AnimatePresence>
                <BurgerTsx onClick={onclick} />
            </motion.nav>
        </>
    );
};

const navStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderBottom: '2px solid #e0e0e0',
    padding: 10,
    zIndex: 5,
    position: 'fixed',
    width: '100%',
    top: 0,
    height: 50,
};

const logoLinkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1%',
    left: '6%',
    alignItems: 'center',
    marginBottom: '3%',
    display: 'flex',
    padding: '0.3%',
    color: 'black',
};

export default BurgerBar;
