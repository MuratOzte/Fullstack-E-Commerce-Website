import RangeSlider from './priceSlider';

export default function Filter() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
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
