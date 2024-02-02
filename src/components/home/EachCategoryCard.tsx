import Image, { StaticImageData } from 'next/image';

const EachCategoryCard: React.FC<{
    alt: string;
    image: StaticImageData;
    title: string;
}> = ({ alt, image, title }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                backgroundColor: 'blue',
                position: 'absolute',
                bottom: 0,
                left: '10',
            }}
        >
            <Image
                src={
                    'https://getmobil.com/_next/image/?url=https%3A%2F%2Fassets.getmobil.com%2Fuploads%2F6243%2Fgetmobil-apple-iphonesex-white-00png.png&w=640&q=75'
                }
                alt={alt}
                width={150}
                height={150}
            />
            <p>{title}</p>
        </div>
    );
};

export default EachCategoryCard;
