import { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function StarRate() {
    const [selected, setSelected] = useState(0);
    const texts = [
        '1 Star Or Above',
        '2 Stars Or Above',
        '3 Stars Or Above',
        '4 Stars Or Above',
        '5 Stars',
    ];

    return (
        <div
            style={{
                display: 'flex',
                margin: 10,
                marginLeft:'15%',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            {texts.map((text, index) => (
                <div
                    key={index}
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                    onClick={() => setSelected(index)}
                >
                    <input type="checkbox" checked={selected === index} />
                    <StarRateIcon sx={{ color: 'yellow', ml: 1 }} />
                    <p style={{ marginTop: '2px', marginLeft: 10 }}>{text}</p>
                </div>
            ))}
        </div>
    );
}
