const { MongoClient, ServerApiVersion } = require('mongodb');


let cachedDb = null;

const certificate = 'X509-cert-1515475297667010122.pem'


export async function saveRecord(data) {
  console.log("[saveRecord]")
  await connectToDatabase();
  console.log("Connected to db!")
}


async function connectToDatabase() {
  if (cachedDb) {
    // If a connection exists, we return it.
    return cachedDb;
  }

  const client = new MongoClient('mongodb+srv://badfaith.i5h083e.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: certificate,
    sslCert: certificate,
    serverApi: ServerApiVersion.v1
  });

  try {
    await client.connect();
    console.log('Connected to database');
    const database = client.db("badfaith");
    console.log('Database connected!')
    const collection = database.collection("badfaith");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  // Cache the database connection and return it.
  cachedDb = database;
  return database;
}
