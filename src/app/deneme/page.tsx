const getProducts = async () => {
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
    dealer: string;
}

const Deneme = async () => {
    const products: Product[] = await getProducts();

    return (
        <>
            <h1>Products</h1>
            <ul>
                {products &&
                    products.map((product) => (
                        <li key={product.id}>
                            {product.name} - {product.price} - {product.dealer}
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Deneme;
