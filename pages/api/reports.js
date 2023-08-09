import { getSession } from "@auth0/nextjs-auth0";
import { getReports } from "../../utils/db";

export default async function (req, res) {
  const session = await getSession(req, res);
  if (!session) {
    res.status(401).json({ error: "Authorisation Required" });
  }

  if (req.method === "GET") {
    try {
      const reports = await getReports(session.user);
      res.status(200).json(reports);
    } catch (err) {
      console.log("Error: ", err);
      res.status(500).json({ error: err });
    }
  }
}
