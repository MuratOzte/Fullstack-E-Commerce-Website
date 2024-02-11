import { useState } from 'react';
interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    const [hover, setHover] = useState(false);
    return (
        <>
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
        </>
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
