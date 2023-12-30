import User from "../Models/authModel.js";

export const registerUser = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
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

export const loginUser = async (req, res) => {
  try {
    const dupa = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!dupa) res.status(404).send("User or password not correct");

    return res.status(200).send({ response: req.body.email });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};
