import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const client = await MongoClient.connect(
                process.env.MONGODB_URI || ''
            );

            const db = client.db('e-commerce');
            const productsCollection = db.collection('products');
            const products = await productsCollection.find({}).toArray();

            client.close();
            return NextResponse.json(products);
        }
    } catch (e) {
        res.status(500).json({ message: 'Unable to connect to database' });
    }
}


