import { TextField } from '@mui/material';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
    return `${value}$`;
}

const minDistance = 150;

export default function MinimumDistanceSlider() {
    const [value1, setValue1] = React.useState<number[]>([0, 1500]);

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Slider
                sx={{ width: 200 }}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                disableSwap
                min={0}
                max={1500}
                step={50}
            />

            <TextField
                value={value1[0]}
                sx={{ width: '40%' }}
                onChange={(e) => setValue1([+e.target.value, value1[1]])}
                inputProps={{
                    step: 50,
                    min: 0,
                    max: 1500,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />
            <TextField
                value={value1[1]}
                onChange={(e) => setValue1([value1[0], +e.target.value])}
                aria-label="Minimum distance"
                inputProps={{
                    step: 50,
                    min: 0,
                    max: 1500,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />
        </div>
    );
}
