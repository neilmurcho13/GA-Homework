import WhiskySearch from "../models/whisky.js";
import Country from "../models/country.js";
import { removedAdded } from "./helpers.js";

export const getAllWhisky = async (req, res, next) => {
  try {
    const whisky = await WhiskySearch.find();
    return res.status(200).json(whisky);
  } catch (err) {
    next(err);
  }
};

async function createWhisky(req, res, next) {
  try {
    const newWhisky = await WhiskySearch.create(req.body);

    await Country.updateMany(
      { _id: newWhisky.countries },
      { $push: { whiskies: newWhisky._id } }
    );
    return res.status(201).json(newWhisky);
  } catch (err) {
    next(err);
  }
}

async function getWhisky(req, res, next) {
  const id = req.params.id;

  try {
    const whisky = await WhiskySearch.findById(id);
    return res.status(200).json(whisky);
  } catch (err) {
    next(err);
  }
}

async function deleteWhisky(req, res, next) {
  const id = req.params.id;

  try {
    const whisky = await WhiskySearch.findByIdAndDelete(id);

    if (!whisky) {
      return res.status(404)({ message: "Whisky does not exist" });
    }

    const countriesToRemove = await whisky.countries.map((country) =>
      country.toString()
    );

    await Country.updateMany(
      { _id: countriesToRemove },
      { $pull: { whiskies: whisky._id } }
    );

    return res.status(200).json(whisky);
  } catch (err) {
    next(err);
  }
}

async function updateWhisky(req, res, next) {
  const { id } = req.params;
  const { body } = req;

  try {
    const whiskyToUpdate = await WhiskySearch.findById(id);

    if (!whisky) {
      return res.status(404)({ message: "Whisky does not exist" });
    }

    const [removedCountries, addedCountries] = removedAdded(
      whiskies.countries.map((country) => country.toString()),
      req.body.countries
    );

    country.set(req.body);

    const savedWhisky = whisky.save();

    await Country.updateMany(
      { _id: removedCountry },
      { $pull: { whiskies: savedWhisky._id } }
    );

    await Country.updateMany(
      { _id: addedCountries },
      { $push: { whiskies: savedWhisky._id } }
    );

    return res.status(200).json(whisky);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllWhisky,
  createWhisky,
  getWhisky,
  deleteWhisky,
  updateWhisky,
};
