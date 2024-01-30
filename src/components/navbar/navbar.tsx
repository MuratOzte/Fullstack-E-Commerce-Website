'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname: string = usePathname();
    const links: { text: string; url: string }[] = [
        { text: 'Login', url: '/login' },
        { text: 'Register', url: '/register' },
        { text: 'Home', url: '/' },
    ];

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
                            <motion.div layoutId="navbar">
                                <Link
                                    style={{
                                        borderBottom:
                                            pathname === e.url
                                                ? '2px solid black'
                                                : 'none',
                                    }}
                                    href={e.url}
                                >
                                    {e.text}
                                </Link>
                            </motion.div>
                        </motion.li>
                    );
                })}
            </ul>
        </nav>
    );
};

const ulStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'center',
    listStyle: 'none',
    padding: 0,
    gap: 30,
    margin: 5,
};

const navStyle: React.CSSProperties = {
    backgroundColor: '#7FC7D9',
    padding: 15,
};

export default Navbar;
