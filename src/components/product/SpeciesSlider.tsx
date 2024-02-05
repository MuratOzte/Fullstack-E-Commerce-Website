/*


    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********
    **********  THIS FILE IS NOT IN USE  **********



*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

interface Props {
    title: string;
    min: number;
    max: number;
    step: number;
    distance: number;
}

const SpeciesSlider: React.FC<Props> = ({
    title,
    min,
    max,
    step,
    distance,
}) => {
    const [value1, setValue1] = React.useState<number[]>([min, max]);

    const minDistance = distance;

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
        <Box sx={boxStyle}>
            <p>{title}</p>
            <Slider
                sx={{ width: 200, color: '#61677A' }}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={min}
                max={max}
                step={step}
            />
        </Box>
    );
};

export default SpeciesSlider;

const boxStyle: React.CSSProperties = {
    width: 250,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4,
};
