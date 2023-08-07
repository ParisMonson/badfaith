import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { saveRecord, getUser, createUser } from "../../../utils/db";

const afterCallback = (req, res, session, state) => {
  getUser(session.user.email)
    .then((user) => {
      if (user) {
        return session;
      } else {
        createUser(session.user.email);
      }
    })
    .catch((err) => {
      console.error(err);
    });

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
