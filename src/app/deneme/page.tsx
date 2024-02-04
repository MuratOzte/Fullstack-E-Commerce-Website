'use client';
import useSWR from 'swr';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    dealer: string;
}

function ProductSWR() {
    const { data, error } = useSWR('products', async () => {
        const response = await fetch('/api/products');
        const data: Product[] = await response.json();
        return data;
    });

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            {data.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price} - {product.dealer}
                </div>
            ))}
        </div>
    );
}

export default ProductSWR;
