import { useEffect } from 'react';

interface Props {
    title: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    bigValue: number;
    smallValue: number;
}

const PriceSliderInput: React.FC<Props> = ({
    title,
    onChange,
    value,
    bigValue,
    smallValue,
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseFloat(e.target.value);

        // 0 ile 1500 arasında kontrol
        if (inputValue >= 0 && inputValue <= 1500) {
            onChange(e);
        }
    };

    return (
        <div style={divStyle}>
            <p style={pStyle}>{title}</p>
            <input
                type="number"
                min="0"
                max="1500"
                step="50"
                onChange={handleInputChange}
                value={smallValue === value ? smallValue : bigValue}
                style={inputStyle}
            />
            <p style={dolarStyle}>$</p>
        </div>
    );
};

export default PriceSliderInput;

const divStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginTop: '15px',
};

const pStyle: React.CSSProperties = {
    width: '50%',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
};

const inputStyle: React.CSSProperties = {
    width: '40%',
    backgroundColor: '#F2EFE5',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    fontSize: '18px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlignLast: 'end',
    border: '1px solid #ccc',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
};

const dolarStyle: React.CSSProperties = {
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    right: '15%',
};
