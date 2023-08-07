const { MongoClient, ServerApiVersion } = require("mongodb");
let cachedDb = null;

const certificate = "X509-cert-1515475297667010122.pem";

export async function saveRecord(data) {
  const db = await connectToDatabase();
}
export async function getRecords() {
  const db = await connectToDatabase();
  const collection = db.collection("sample_training");
}
export async function getSingleRecord() {
  const db = await connectToDatabase();
  const collection = db.collection("sample_training");
}
export async function saveUser(data) {
  const db = await connectToDatabase();
}

export async function createUser(email) {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const result = await users.insertOne({ email: email });
  console.log("Inserted user with ID:", result.insertedId);
  return result;
}

/////

export async function getUser(email) {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const user = await users.findOne({ email: email });
  if (user) {
    console.log("User:", user.email);
  }
  return user;
}

/////////////

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(
    "mongodb+srv://badfaith.i5h083e.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
    {
      sslKey: certificate,
      sslCert: certificate,
      serverApi: ServerApiVersion.v1,
    }
  );

  let db;

  try {
    await client.connect();
    db = client.db("badfaith-development");
  } catch (error) {
    console.log("Error: ", error);
  }

  cachedDb = db;
  return db;
}
