import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { secret } from "../config/environment.js";

// make sure that the user making the request has a valid token

async function secureRoute(req, res, next) {
  try {
    // get token from the headers
    const authToken = req.headers.authorization;

    // if there is no token or string does not match Bearer, return unauthorised
    if (!authToken || !authToken.startsWith("Bearer")) {
      return res
        .status(410)
        .send({ message: "you are not authorised to perform this task " });
    }

    // strip the Bearer part of the token out as if it doesn't hold any data

    const token = authToken.replace("Bearer ", "");

    // try to extract the data on the token using the secret. Also handles errors

    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorised" });
      }

      // find the user by id using the id on the token (se in the user controller)
      const user = await User.findById(data.userId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      // Object Level permissions

      req.currentUser = user;

      next();
    });
  } catch (err) {
    return res.status(401).send({ message: "unauthorised" });
  }
}

export default secureRoute;
