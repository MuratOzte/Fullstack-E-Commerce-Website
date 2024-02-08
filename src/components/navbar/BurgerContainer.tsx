'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const links: { href: string; label: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/samsung', label: 'Samsung' },
    { href: '/apple', label: 'Apple' },
    { href: '/xiaomi', label: 'Xiaomi' },
    { href: '/huawei', label: 'Huawei' },
    { href: '/oppo', label: 'Oppo' },
    { href: '/poco', label: 'Poco' },
];

import React from 'react';

const BurgerContainer = () => {
    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -800, opacity: 0 }}
            transition={{ duration: 0.3, bounce: 0 }}
            style={{
                width: '100%',
                height: '500px',
                zIndex: 100,
                backgroundColor: 'black',
                position: 'absolute',
                top: '50px',
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {links.map((link: { href: string; label: string }) => (
                <Link key={link.href} href={link.href}>
                    {link.label}
                </Link>
            ))}
        </motion.div>
    );
};

export default BurgerContainer;
