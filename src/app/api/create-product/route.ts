import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.insertOne(data);
        client.close;

        return NextResponse.json({
            message: 'successfully inserted',
            data: data,
        });
    } catch (e) {
        res.status(500).json({ message: 'Unable to connect to database' });
    }
}



