//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
//hooks
import { useState, useEffect, useRef } from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    setData: (data: any) => void;
    data: {
        username: string;
        password: string;
    };
}

const Input: React.FC<InputProps> = ({ type, placeholder, setData, data }) => {
    const [hover, setHover] = useState(false);
    const [passwordType, setPasswordType] = useState(type);
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                type={passwordType}
                placeholder={placeholder}
                onChange={(e) =>
                    setData({ ...data, [placeholder]: e.target.value })
                }
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
                    onClick={() =>
                        setPasswordType(
                            passwordType === 'password' ? 'text' : 'password'
                        )
                    }
                    style={{
                        position: 'absolute',
                        right: width < 400 ? '20%' : '42.8%',
                        top: '52.3%',
                    }}
                >
                    {passwordType == 'password' ? (
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
