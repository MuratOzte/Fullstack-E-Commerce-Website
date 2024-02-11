//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
//hooks
import { useState, useEffect } from 'react';

interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    const [hover, setHover] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                type={type}
                placeholder={placeholder}
                style={{
                    ...inputStyle,
                    borderColor: hover ? 'black' : '#ccc',
                    boxShadow: hover ? '0 0 2px black' : 'none',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            {type === 'password' && (
                <IconButton
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    style={{
                        position: 'absolute',
                        right: width < 400 ? '20%' : '42.8%',
                        top: '52.3%',
                    }}
                >
                    {isPasswordVisible ? (
                        <VisibilityIcon />
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </IconButton>
            )}
        </div>
    );
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'inherit',
    color: 'inherit',
    backgroundColor: 'white',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
};

export default Input;
