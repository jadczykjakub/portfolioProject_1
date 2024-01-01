import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("-================================>");

  if (token) {
    // @ts-ignore
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      console.log("elo");
      if (err) {
        console.log("elo3");
        console.log(res);
        // res.redirect("/dupa");

        //TODO what middleware do when not correct.

        console.log(err);
      }

      next();
    });
  }
};
