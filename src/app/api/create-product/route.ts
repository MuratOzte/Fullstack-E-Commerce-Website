import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const categoriesCollection = db.collection('products');
        await categoriesCollection.insertOne(data);

        return NextResponse.json({
            message: 'successfully inserted',
            data: data,
        });
    } catch (e) {
        console.log(e);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return NextResponse.json({ message: 'Create Product api' });
    }
}
