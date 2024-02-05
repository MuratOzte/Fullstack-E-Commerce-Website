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
        <div
            style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                marginTop: '15px',
            }}
        >
            <p>{title}</p>
            <input
                type="number"
                min="0"
                max="1500"
                step="50"
                onChange={onChange}
                value={smallValue === value ? smallValue : bigValue}
                style={{ width: '60%' }}
            />
        </div>
    );
};

export default PriceSliderInput;
