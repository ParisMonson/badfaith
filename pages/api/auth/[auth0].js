import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { saveRecord, getUser, createUser } from "../../../utils/db";

const afterCallback = async (req, res, session, state) => {
  try {
    let user = await getUser(session.user.email);
    let mongoUserId;

    if (user) {
      // If the user is found, extract the Mongo user ID and convert it to a string.
      mongoUserId = user._id?.toString();
    } else {
      // If the user is not found, create a new user in the database.
      const newUser = await createUser(session.user.email);

      // Extract the Mongo user ID from the newly created user and convert it to a string.
      mongoUserId = newUser.insertedId.toString();
    }

    session.user.mongoUserId = mongoUserId;
  } catch (err) {
    console.error(err);
  }

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
