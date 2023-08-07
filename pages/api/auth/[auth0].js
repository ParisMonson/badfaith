import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { saveRecord, getUser } from "../../../utils/db";

const afterCallback = (req, res, session, state) => {
  console.log("afterCallback:", req);
  console.log("session: ", session);
  console.log("state: ", state);
  getUser(session.user.email)
    .then((user) => {
      console.log("user: ", user);
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
