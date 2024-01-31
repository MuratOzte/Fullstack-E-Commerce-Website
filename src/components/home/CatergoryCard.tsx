import { MongoClient, ObjectId } from 'mongodb';
import Image, { StaticImageData } from 'next/image';
import {
    computer,
    headphone,
    phone,
    tv,
    playstation,
} from '@/assets/categories/index';
import { Grid } from '@mui/material';
import EachCategoryCard from './EachCategoryCard';

const categories: { image: StaticImageData; alt: string; title: string }[] = [
    { image: computer, alt: 'Computer', title: 'Computer' },
    { image: headphone, alt: 'Headphone', title: 'Headphone' },
    { image: phone, alt: 'Phone', title: 'Phone' },
    { image: tv, alt: 'TV', title: 'TV' },
    { image: playstation, alt: 'Playstation', title: 'Playstation' },
];

const CategoryCards = (props: any) => {
    console.log(props);
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            {categories.map((e) => (
                <Grid item xs={2} key={e.alt}>
                    <EachCategoryCard
                        key={e.title}
                        image={e.image}
                        alt={e.alt}
                        title={e.title}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export async function getServerSideProps() {
    try {
        const client = await MongoClient.connect(
            'mongodb+srv://mo2553481:nvEDS8KehYUsk9RE@muratdb.yhxcibw.mongodb.net/e-commerce?retryWrites=true&w=majority'
        );

        const db = client.db();
        const categoriesCollection = db.collection('categories');

        const categories = await categoriesCollection.find({}).toArray();
        console.log(categories);

        client.close();

        return {
            props: {
                categories,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                categories: [],
            },
        };
    }
}

export default CategoryCards;
