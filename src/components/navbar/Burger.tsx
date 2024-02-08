'use client';
import { useState } from 'react';
const BurgerTsx = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const clickHandler = () => {
        setTimeout(() => {
            setIsClicked((prev) => !prev);
        }, 200);
    };

    return (
        <div onClick={clickHandler} style={burger}>
            <span
                style={{
                    ...line1,
                    transform: isClicked
                        ? 'rotate(45deg) translate(5px, 5px) '
                        : 'rotate(0deg) translate(0px, 0px)',
                }}
            ></span>
            <span style={{ ...line2, opacity: isClicked ? 0 : 1 }}></span>
            <span
                style={{
                    ...line3,
                    transform: isClicked
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'rotate(0deg) translate(0px, 0px)',
                }}
            ></span>
        </div>
    );
};

const burger: React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '5%',
    right: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
};

const line1: React.CSSProperties = {
    display: 'block',
    width: '25px',
    height: '4px',
    top: '5px',
    backgroundColor: 'black',
    margin: '5px 0px',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
};

const line2: React.CSSProperties = {
    display: 'block',
    position: 'absolute',
    top: '15px',
    width: '25px',
    height: '4px',
    backgroundColor: 'black',
    margin: '5px 0px',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
};

const line3: React.CSSProperties = {
    display: 'block',
    width: '25px',
    height: '4px',
    position: 'absolute',
    top: '22px',
    backgroundColor: 'black',
    margin: '5px 0px',
    borderRadius: '5px',
    transition: 'all 0.5s ease',
};

const checkbox: React.CSSProperties = {
    opacity: 0,
};

export default BurgerTsx;
