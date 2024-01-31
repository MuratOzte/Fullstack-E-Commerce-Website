import Image from 'next/image';
import { Grid } from '@mui/material';
import { Computer } from '@/assets/homepage-slider-images';
import ImageSlider from '@/components/home/image-slider';

export default function Home() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <ImageSlider />
            </div>
        </>
    );
}
