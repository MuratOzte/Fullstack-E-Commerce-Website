import Species from './Species';
import StarSection from './StarSection';
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
                }}
            >
                <StarSection />
            </div>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
                    marginLeft: '5%',
                }}
            >
                <Species />
            </div>
        </div>
    );
}
