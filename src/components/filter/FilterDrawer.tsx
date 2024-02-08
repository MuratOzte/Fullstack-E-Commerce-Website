'use client';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from './filter';

const FilterDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <motion.div
                animate={{ x: open ? 260 : 0 }}
                transition={{ bounce: 0, duration: open ? 0.18 : 0.2 }}
                style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    borderTopRightRadius: '50%',
                    borderBottomRightRadius: '50%',
                    backgroundColor: 'red',
                    left: '0',
                    top: '40%',
                    width: '2%',
                    height: 150,
                    textAlign: 'center',
                    alignItems: 'center',
                }}
                onClick={handleOpen}
                dangerouslySetInnerHTML={{
                    __html: !open ? '&#x276D;' : '&#x276C;',
                }}
            />

            <Drawer
                anchor="left"
                open={open}
                onClose={handleClose}
                ModalProps={{
                    keepMounted: true,
                    BackdropProps: {
                        style: { backgroundColor: 'transparent' },
                    },
                }}
            >
                <Filter />
            </Drawer>
        </div>
    );
};

export default FilterDrawer;
