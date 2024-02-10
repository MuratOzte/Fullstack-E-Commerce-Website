//components
import Slider from '@mui/material/Slider';
import PriceSliderInput from './PriceSliderInput';
//hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//slices
import { filterSlice } from '@/GlobalRedux/slices';

function valuetext(value: number) {
    return `${value}$`;
}

const minDistance = 150;

export default function MinimumDistanceSlider() {
    const dispatch = useDispatch();

    const [value1, setValue1] = useState<number[]>([0, 1500]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(
                filterSlice.actions.setFilters({
                    key: 'minPrice',
                    value: value1[0],
                })
            );
            dispatch(
                filterSlice.actions.setFilters({
                    key: 'maxPrice',
                    value: value1[1],
                })
            );
        }, 100);
    }, [value1]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1],
            ]);
        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ]);
        }
    };

    return (
        <>
            <div style={divStyle}>
                <Slider
                    sx={{ width: 200, color: '#7D7C7C', ml: '10%' }}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={0}
                    max={1500}
                    step={50}
                />
                <PriceSliderInput
                    title="Minimum Price"
                    value={value1[0]}
                    onChange={(e) => setValue1([+e.target.value, value1[1]])}
                    bigValue={value1[1]}
                    smallValue={value1[0]}
                />
                <PriceSliderInput
                    title="Maximum Price"
                    value={value1[1]}
                    onChange={(e) => setValue1([value1[0], +e.target.value])}
                    bigValue={value1[1]}
                    smallValue={value1[0]}
                />
            </div>
        </>
    );
}

const divStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
};
