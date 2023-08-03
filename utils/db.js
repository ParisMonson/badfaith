const { MongoClient, ServerApiVersion } = require('mongodb');


let cachedDb = null;

const certificate = 'X509-cert-1515475297667010122.pem'


export async function saveRecord(data) {
  const db = await connectToDatabase();
}
export async function getRecords() {
  const db = await connectToDatabase();
  const collection = db.collection("sample_training");
}


async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient('mongodb+srv://badfaith.i5h083e.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: certificate,
    sslCert: certificate,
    serverApi: ServerApiVersion.v1
  });


  let db;

  try {
    await client.connect();
    db = client.db("badfaith");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  cachedDb = db;
  return db;
}
