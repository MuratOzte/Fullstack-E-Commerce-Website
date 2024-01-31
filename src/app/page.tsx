import { Typography, Grid } from '@mui/material';
import ImageSlider from '@/components/home/image-slider';
export default function Home() {
    return (
        <>
            <Grid
                container
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <Grid item xs={6}>
                    <ImageSlider />
                </Grid>
                <Grid item xs={6} sx={{ position: 'absolute', right: '10%' }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontFamily: 'Work Sans sans-serif',
                        }}
                    >
                        Shop smart,
                    </Typography>
                    <Typography variant="h2" component="h2" gutterBottom>
                        Live stylish,
                    </Typography>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Elevate Your Lifestyle with Our Unbeatable Deals,
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
