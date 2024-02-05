import Species from './Species';
import StarSection from './StarSection';
import RangeSlider from './priceSlider';
import Divider from './Divider';

export default function Filter() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                    marginTop: '15%',
                    height: '20vh',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10%',
                }}
            >
                <RangeSlider />
            </div>
            <Divider />
            <div
                style={{
                    marginTop: '5%',
                    height: '20vh',
                }}
            >
                <StarSection />
            </div>
            <Divider />
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
