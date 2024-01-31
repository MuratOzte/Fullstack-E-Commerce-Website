import allowedUrl from '@/util/allowedUrl';

const CategoryPage: React.FC<{ params: { category: string } }> = ({
    params,
}) => {
    if (!allowedUrl(params?.category))
        return <div>{params?.category} Not Found</div>;

    return <div>{params?.category}</div>;
};

export default CategoryPage;
