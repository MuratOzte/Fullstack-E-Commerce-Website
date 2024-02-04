import { useState } from 'react';
import RangeSlider from './priceSlider';

export default function Filter() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
                    border: '2px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <RangeSlider />
            </div>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
                    border: '2px solid black',
                }}
            >
                Price Selector
            </div>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
                    border: '2px solid black',
                }}
            >
                Price Selector
            </div>
        </div>
    );
}
