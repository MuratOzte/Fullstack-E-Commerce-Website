'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname: string = usePathname();

    const links: { text: string; url: string }[] = [
        { text: 'Home', url: '/' },
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

export default Navbar;
