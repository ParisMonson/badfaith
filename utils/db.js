const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const path = require("path");
const fs = require("fs");
const os = require("os");

let cachedDb = null;

const certificate = process.env.MONGODB_SSL_CERT;

const certificateContent = Buffer.from(certificate, "base64").toString("ascii");
const tempCertPath = path.join(os.tmpdir(), "tempCert.pem");

if (!fs.existsSync(tempCertPath)) {
  fs.writeFileSync(tempCertPath, certificateContent);
}

export async function saveReport(userEmail, reportData) {
  const db = await connectToDatabase();
  const reports = db.collection("reports");
  const users = db.collection("users");
  const user = await users.findOne({ email: userEmail });

  if (!user) {
    throw new Error("User not found");
  }

  const report = {
    content: reportData,
    userId: user._id,
    createdAt: new Date(),
  };

  const result = await reports.insertOne(report);

  return result;
}

export async function getReports(user) {
  const db = await connectToDatabase();
  const reports = db.collection("reports");
  const objectId = new ObjectId(user.mongoUserId);
  const query = { userId: objectId };
  const result = await reports.find(query).toArray();
  return result;
}

export async function getSingleReport() {
  const db = await connectToDatabase();
  const collection = db.collection("sample_training");
}
export async function saveUser(data) {
  const db = await connectToDatabase();
}

export async function createUser(email) {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const result = await users.insertOne({ email: email, createdAt: new Date() });
  return result;
}

export async function getUser(email) {
  const db = await connectToDatabase();
  const users = db.collection("users");
  const user = await users.findOne({ email: email });

  return user;
}

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(
    "mongodb+srv://badfaith.i5h083e.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
    {
      sslKey: tempCertPath,
      sslCert: tempCertPath,
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
