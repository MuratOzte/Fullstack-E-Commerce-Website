'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
const LoginRegisterSwitch = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={entireDivStyle}>
            <motion.div
                style={{
                    ...loginButtonStyle,
                    backgroundColor: isLogin ? 'grey' : 'white',
                    color: !isLogin ? 'black' : 'white',
                }}
                onClick={() => setIsLogin(!isLogin)}
            >
                Login
            </motion.div>
            <motion.div
                style={{
                    ...registerButtonStyle,
                    backgroundColor: !isLogin ? 'grey' : 'white',
                    color: isLogin ? 'black' : 'white',
                }}
                onClick={() => setIsLogin(!isLogin)}
            >
                Register
            </motion.div>
        </div>
    );
};

export default LoginRegisterSwitch;

const entireDivStyle: React.CSSProperties = {
    display: 'flex',
    border: '2px solid grey',
    borderRadius: '20px',
    marginBottom: '200px',
    width: '200px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
};

const registerButtonStyle: React.CSSProperties = {
    border: '',
    padding: '8px',
    width: '100px',
    borderRadius: '0 16px 16px 0',
    transition: 'all 0.3s ease',
};

const loginButtonStyle: React.CSSProperties = {
    padding: '8px',
    width: '100px',
    borderRadius: '16px 0 0 16px',
    transition: 'all 0.3s ease',
};
