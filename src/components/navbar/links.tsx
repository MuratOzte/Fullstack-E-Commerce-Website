import Link from 'next/link';

const Links = () => {
    return (
        <>
            <li>
                <Link href={'/'}>HomePage</Link>
            </li>
            <li>
                <Link href={'/login'}>Login</Link>
            </li>
            <li>
                <Link href={'/register'}>register</Link>
            </li>
        </>
    );
};

export default Links;
