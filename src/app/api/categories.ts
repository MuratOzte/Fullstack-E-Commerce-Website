import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const client = await MongoClient.connect(
                process.env.MONGODB_URI || ''
            );

            const db = client.db('e-commerce');
            const categoriesCollection = db.collection('categories');
            const categories = await categoriesCollection.find({}).toArray();

            console.log(categories);
            client.close();
            return res.status(200).json({ categories });
        }
    } catch (e) {
        res.status(500).json({ message: 'Unable to connect to database' });
    }
};
