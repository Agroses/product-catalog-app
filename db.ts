import { MongoClient, Db, ObjectId } from 'mongodb';

let uri = 'mongodb://localhost:27017';
let cachedDb: Db;

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);
  const db = client.db('mydb');
  cachedDb = db;
  return db;
}

export async function fetchProducts() {
  const db = await connectToDatabase();
  const productsCollection = db.collection('products');
  const products = await productsCollection.find().toArray();
  return products;
}

export async function fetchProduct(id: string) {
  const db = await connectToDatabase();
  const productsCollection = db.collection('products');
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });
  return product;
}

export default connectToDatabase;
