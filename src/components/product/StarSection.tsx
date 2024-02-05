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
        <div style={divStyle}>
            {texts.map((text, index) => (
                <div
                    key={index}
                    style={innerDivStyle}
                    onClick={() => setSelected(index)}
                >
                    <input type="checkbox" checked={selected === index} />
                    <StarRateIcon sx={starStyle} />
                    <p style={pStyle}>{text}</p>
                </div>
            ))}
        </div>
    );
}

const divStyle: React.CSSProperties = {
    display: 'flex',
    margin: 10,
    marginLeft: '15%',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const innerDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
};

const pStyle: React.CSSProperties = {
    marginTop: '2px',
    marginLeft: 10,
    color: 'black',
};

const starStyle: React.CSSProperties = { color: 'orange', marginLeft: 1 };
