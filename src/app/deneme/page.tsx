import { Suspense, useState } from 'react';

const getProducts = () => {
    return fetch('http://localhost:3000/api/products', {
        cache: 'force-cache',
    }).then((res) => {
        const data = res.json();
        return data;
    });
};

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const Deneme = async () => {
    const products: Product[] = await getProducts();

    return (
        <>
            <h1>Products</h1>
            <ul>
                <Suspense fallback={<div>Loading....</div>}>
                    {products &&
                        products.map((product) => (
                            <li key={product.id}>
                                {product.name} - {product.price}
                            </li>
                        ))}
                </Suspense>
            </ul>
        </>
    );
};

export default Deneme;
