const sendProductAction = async (formData: FormData) => {
    const product = {
        name: formData.get('name'),
        price: formData.get('price'),
        description: formData.get('description'),
        image: formData.get('image'),
        dealer: formData.get('dealer'),
        star: formData.get('star'),
        sellCount: formData.get('sellCount'),
        ram: formData.get('ram'),
        storage: formData.get('storage'),
        battery: formData.get('battery'),
        comments: [],
    };


    const postData = async () => {
        try {
            const response = await fetch('/api/create-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    dealer: product.dealer,
                    star: product.star,
                    sellCount: product.sellCount,
                    ram: product.ram,
                    storage: product.storage,
                    battery: product.battery,
                    comments: product.comments,
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                console.error('Failed to create product:', response.statusText);
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    await postData();
};

export default sendProductAction;
