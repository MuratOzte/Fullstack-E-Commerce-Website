import EntireForm from '@/components/acount/EntireForm';

const Account = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(to top, #8e9eab, #ffffff)',
                width: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <EntireForm />
            </div>
        </div>
    );
};

export default Account;
