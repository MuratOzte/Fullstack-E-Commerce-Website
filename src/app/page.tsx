import ImageSlider from '@/components/home/image-slider';
import { Grid, Typography } from '@mui/material';

export default function Home() {
    return (
        <>
            <Grid container style={mainScreenStyles}>
                <Grid item xs={6}>
                    <ImageSlider />
                </Grid>
                <Grid item xs={6} sx={typographiesBoxStyles}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={typographyFontFamily}
                    >
                        Shop smart,
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={typographyFontFamily}
                    >
                        Live stylish,
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                        gutterBottom
                        sx={typographyFontFamily}
                    >
                        Elevate Your Lifestyle with Our Unbeatable Deals,
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

const typographyFontFamily: React.CSSProperties = {
    fontFamily: 'Work Sans sans-serif',
};

const typographiesBoxStyles: React.CSSProperties = {
    position: 'absolute',
    right: '10%',
};

const mainScreenStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
};
