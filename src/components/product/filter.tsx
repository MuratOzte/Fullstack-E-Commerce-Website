import { useState } from 'react';

export default function App() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <div>
            <h2>Scroll Top: {scrollTop.toFixed(2)}</h2>

            <div
                style={{
                    border: '3px solid black',
                    height: '80vh',
                }}
                onScroll={handleScroll}
            >
                {[...Array(100)].map((_, index) => (
                    <p key={index}>Content {index}</p>
                ))}
            </div>
        </div>
    );
}
