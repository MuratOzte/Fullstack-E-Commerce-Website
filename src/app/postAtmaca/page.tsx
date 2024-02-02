'use client'
import { useEffect } from 'react';

const PostAtmacaPage = () => {
    useEffect(() => {
        const postData = async () => {
            try {
                const response = await fetch('/api/create-product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: 'Atmaca',
                        price: 1000,
                        description: 'Atmaca is a good product',
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                } else {
                    console.error(
                        'Failed to create product:',
                        response.statusText
                    );
                }
            } catch (error) {
                console.error('Error during API call:', error);
            }
        };

        postData();
    }, []);

    return <h1>Post atmaca page</h1>;
};

export default PostAtmacaPage;
