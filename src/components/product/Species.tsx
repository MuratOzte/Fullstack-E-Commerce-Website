const Species = () => {
    const ramOptions = ['All', '2GB', '3GB', '4GB', '6GB', '8GB'];
    const storageOptions = [
        'All',
        '8GB',
        '16GB',
        '32GB',
        '64GB',
        '128GB',
        '256GB',
        '512GB',
    ];
    const minimumBatterySize = [
        'All',
        '2000mAh',
        '3000mAh',
        '4000mAh',
        '5000mAh',
        '6000mAh',
    ];

    return (
        <>
            <div style={{ display: 'flex', marginLeft: '5%', marginTop: '5%' }}>
                <p>Ram Capacity</p>
                <select style={{ marginLeft: '5%' }}>
                    {ramOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'flex', marginLeft: '5%', marginTop: '5%' }}>
                <p>Storage Option</p>
                <select style={{ marginLeft: '2.7%' }}>
                    {storageOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'flex', marginLeft: '5%', marginTop: '5%' }}>
                <p>Minimum Battery Size</p>
                <select style={{ marginLeft: '2.7%' }}>
                    {minimumBatterySize.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Species;
