import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI!);

        const db = client.db('e-commerce');
        const usersCollection = db.collection('users');
        const data = await req.json();

        data.password = await bcrypt.hash(data.password, 10);

        // bcrypt.compare(data.password, deneme, function (err, result) {
        //     console.log('result', result);
        // });

        const user = await usersCollection.findOne({ username: data.username });

        if (user) {
            client.close();
            return NextResponse.json({ message: 'User already exists' });
        }

        await usersCollection.insertOne(data);

        client.close();
        return NextResponse.json({ message: 'User created' });
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            message: 'An error occurred',
            data: e,
        });
    }
}
