'use client';

import LoginRegisterSwitch from './LoginRegisterSwitch';
import Input from './Input';

const Login = () => {
    return (
        <div style={entireDivStyle}>
            <LoginRegisterSwitch />
            <Input type="text" placeholder="Username" />
        </div>
    );
};

const entireDivStyle: React.CSSProperties = {
    border: '2px solid black',
    padding: '16px 64px 64px 64px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
};

export default Login;
