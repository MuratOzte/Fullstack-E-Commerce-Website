const PostAtmacaPage = () => {
    fetch('http://localhost:3000/api/create-product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Atmaca',
            price: 1000,
            description: 'Atmaca is a good product',
        }),
    }).then((res) => <h1>{res.json()}</h1>);
    return <h1>Post atmaca page</h1>;
};

export default PostAtmacaPage;
