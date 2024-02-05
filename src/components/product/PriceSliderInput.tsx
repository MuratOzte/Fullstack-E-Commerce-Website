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
    return (
        <div style={divStyle}>
            <p style={pStyle}>{title}</p>
            <input
                type="number"
                min="0"
                max="1500"
                step="50"
                onChange={onChange}
                value={smallValue === value ? smallValue : bigValue}
                style={inputStyle}
            />
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
    width: '70px',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
};

const inputStyle: React.CSSProperties = {
    width: '60%',
    backgroundColor: '#F2EFE5',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    fontSize: '18px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #ccc',
};
