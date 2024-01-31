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
                    'https://img.freepik.com/free-photo/new-phone-11-pro-white-background-close-up_1142-41560.jpg?t=st=1706725000~exp=1706728600~hmac=fd3ddf928f13341ffbb72bf22c10d48f466728ed2fb06acd6d3bdfc84aefcc47&w=996'
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
