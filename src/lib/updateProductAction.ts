const updateProductAction = async (formData: FormData) => {
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

    const isInvalidText = (text: string) => {
        return text.trim() === '' || !text;
    };

    for (const [key, value] of Object.entries(product)) {
        if (isInvalidText(value as string)) {
            throw new Error(`Invalid ${key}`);
        }
    }

    const postData = async () => {
        try {
            const response = await fetch('/api/create-product', {
                method: 'PUT',
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
                console.log(data);
            } else {
                console.error('Failed to create product:', response.statusText);
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    await postData();
};

export default updateProductAction;
