import SpeciesSlider from './SpeciesSlider';

const storage = [
    'All',
    '8GB',
    '16GB',
    '32GB',
    '64GB',
    '128GB',
    '256GB',
    '512GB',
];

const battery = [
    'All',
    '1000mAh',
    '2000mAh',
    '3000mAh',
    '4000mAh',
    '5000mAh',
    '6000mAh',
];
const Species = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <SpeciesSlider
                    title="ram"
                    min={0}
                    max={16}
                    step={1}
                    distance={4}
                />
            </div>
            <div style={ramStyle}>
                Minimum Storage Capacity
                <select style={storageStyle}>
                    {storage.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div style={batteryDivStyle}>
                Minimum Battery Capacity
                <select style={batteryStyle}>
                    {battery.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Species;

const ramStyle: React.CSSProperties = {
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const storageStyle: React.CSSProperties = {
    marginLeft: '5%',
    backgroundColor: 'whitesmoke',
    color: 'black',
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Arial, sans-serif',
};

const batteryDivStyle: React.CSSProperties = {
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const batteryStyle: React.CSSProperties = {
    marginLeft: '3%',
    backgroundColor: 'whitesmoke',
    color: 'black',
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Arial, sans-serif',
};
