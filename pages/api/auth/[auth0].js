import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { saveRecord, getUser, createUser } from "../../../utils/db";

const afterCallback = async (req, res, session, state) => {
  try {
    let user = await getUser(session.user.email);

    if (!user) {
      user = await createUser(session.user.email);
    }

    const mongoUserId = user._id.toString();

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
