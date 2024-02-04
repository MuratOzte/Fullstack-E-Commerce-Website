import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
    let client;
    try {
        client = await MongoClient.connect(process.env.MONGODB_URI!);

        const data = await req.json();

        const db = client.db('e-commerce');
        const prodcutsCollection = db.collection('products');
        await prodcutsCollection.insertOne(data);

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

export async function GET(req: any, res: any) {
    if (req.method === 'GET') {
        return NextResponse.json({ message: 'Create Product api' });
    }
}

export async function PUT(req: any, res: any) {
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
