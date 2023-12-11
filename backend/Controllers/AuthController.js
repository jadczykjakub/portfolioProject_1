import User from "../Models/authModel.js";

export const registerUser = async (req, res) => {
  console.log(res, req, "hello nie wczytuje tutaj kurwa");
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    await newUser
      .save()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};
