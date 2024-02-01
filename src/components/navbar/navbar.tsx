'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import logo from '@/assets/logo.png';

const Navbar = () => {
    const pathname: string = usePathname();

    const links: { text: string; url: string }[] = [
        { text: 'Mobile Phones', url: '/mobile-phones' },
        { text: 'Laptops', url: '/laptops' },
        { text: 'Cameras', url: '/cameras' },
        { text: 'Headphones', url: '/headphones' },
        { text: 'Speakers', url: '/speakers' },
        { text: 'Watches', url: '/watches' },
    ];

    const isCurrentLink = (url: string) => {
        return pathname == url;
    };

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <Link href="/" style={logoLinkStyle}>
                    <Image src={logo} alt="logo" width={32} height={32} />
                    <p style={{ marginLeft: '1%' }}>E-commerce</p>
                </Link>

                {links.map((e) => {
                    return (
                        <motion.li
                            key={e.text}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link href={e.url}>
                                {e.text}
                                {isCurrentLink(e.url) && (
                                    <motion.div
                                        layoutId="current-link"
                                        style={currentLinkStyle}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
        </nav>
    );
};

const ulStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    listStyle: 'none',
    padding: 0,
    gap: 30,
    margin: 5,
};

const navStyle: React.CSSProperties = {
    backgroundColor: '#7FC7D9',
    padding: 15,
    zIndex: 5,
};

const currentLinkStyle: React.CSSProperties = {
    borderBottom: '2px solid white',
    padding: 3,
};

const logoLinkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2%',
    left: '10%',
    alignItems: 'center',
    display: 'flex',
};

export default Navbar;
