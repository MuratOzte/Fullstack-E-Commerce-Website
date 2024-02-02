import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const client = await MongoClient.connect(
                process.env.MONGODB_URI || ''
            );

            const deneme = JSON.parse(req.body);
            console.log(deneme);

            const db = client.db('e-commerce');
            const categoriesCollection = db.collection('products');
            // categoriesCollection.insertOne(data);
            // console.log(data);
            client.close();
            return NextResponse.json({ message: 'merhaba' });
        }
    } catch (e) {
        res.status(500).json({ message: 'Unable to connect to database' });
    }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return NextResponse.json({ message: 'Create Product api' });
    }
}
