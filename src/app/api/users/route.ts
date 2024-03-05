import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI!);

        const db = client.db('e-commerce');
        const usersCollection = db.collection('users');

        const data = await req.json();
        console.log('Request JSON Data:', data);

        const user = await usersCollection.findOne({ username: data.username });
        if (!user) {
            client.close();
            return NextResponse.json({ message: 'User not found' });
        }

        const result = bcrypt.compareSync(data.password, user.password);
        if (!result) {
            client.close();
            return NextResponse.json({ message: 'Wrong password' });
        }

        let token = user.token;

        if (!token) {
            token = Math.random().toString(36).substr(2, 5);

            await usersCollection.updateOne(
                { username: data.username },
                { $set: { token: token } }
            );
        }

        client.close();

        return NextResponse.json({ token, user });
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            message: 'An error occurred',
            data: e,
        });
    }
}
