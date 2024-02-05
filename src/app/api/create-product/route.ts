import { MongoClient } from 'mongodb';

export async function POST(req: Request) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.insertOne(data);
        client.close;

        return new Response('Product created', { status: 201 });
    } catch (e: any) {
        return new Response('An error occurred', {
            status: 500,
            statusText: e.toString(),
        });
    }
}

export async function GET(req: Request) {
    return new Response('Not implemented', { status: 501 });
}
