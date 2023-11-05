import Clothes from "../Models/Clothes.js";

export const getClothes = async (req, res) => {
  try {
    await Clothes.find()
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

export const createClothes = async (req, res) => {
  try {
    const newClothes = new Clothes({
      name: req.body.name,
      season: req.body.season,
    });
    await newClothes
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

export const updateClothes = async (req, res) => {
  try {
    const updatedClothes = await Clothes.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).send({ response: updatedClothes });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};

export const removeClothes = async (req, res) => {
  try {
    await Clothes.findByIdAndRemove(req.params.id).then((response) => {
      res.status(200).send({ response: req.params.id });
    });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};
