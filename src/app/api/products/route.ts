import { MongoClient } from 'mongodb';
import { NextRequest } from 'next/server';

export async function GET() {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI!);

        const db = client.db('e-commerce');
        const productsCollection = db.collection('products');
        const products = await productsCollection.find({}).toArray();

        client.close();
        return new Response(JSON.stringify(products));
    } catch (e) {
        console.log(e);
    }
}

export async function PUT(req: NextRequest,) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.updateMany(
            { name: data.name },
            {
                $set: {
                    sellCount: data.sellCount,
                    star: data.star,
                    ram: data.ram,
                    storage: data.storage,
                    battery: data.battery,
                    comments: [],
                },
            }
        );
        client.close();

        return new Response(JSON.stringify({ message: 'Product updated' }));
    } catch (e) {
        return new Response('An error occurred');
    }
}
