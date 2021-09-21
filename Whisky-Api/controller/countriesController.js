import Country from "../models/country.js";
import Whisky from "../models/whisky.js";
import { removedAdded } from "../controller/helpers.js";
import WhiskySearch from "../models/whisky.js";

// get all countries

async function getAllCountries(_req, res, next) {
  try {
    const countries = await Country.find();
    return res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
}

// get all whiskies for each country
async function getAllWhiskiesForCountry(req, res, next) {
  try {
    const { id } = req.params;
    const country = await Country.findById(id).populate("whisky");
    return res.status(200).json(country.whiskies);
  } catch (err) {
    next(err);
  }
}

// create country

async function createCountry(req, res, next) {
  try {
    const newCountry = await Country.create(req.body);

    await Whisky.updateMany(
      { _id: newCountry.whisky },
      { $push: { country: newCountry._id } }
    );

    return res.status(201).json(newCountry);
  } catch (err) {
    next(err);
  }
}

// get country

async function getCountry(req, res, next) {
  const id = req.params.id;

  try {
    const country = await Country.findById(id);
    if (!country) {
      return res.status(404).send({ message: "Country does not exist" });
    }
    return res.status(200).json(country);
  } catch (err) {
    next(err);
  }
}

// delete Country

async function deleteCountry(req, res, next) {
  const { id } = req.params;

  try {
    const country = await Country.findByIdAndDelete(id);

    if (!country) {
      return res.status(404).send({ message: "Country does not exist " });
    }
    const whiskiesToRemove = country.whiskies.map((whisky) =>
      whisky.toString()
    );

    await WhiskySearch.updateMany(
      { _id: whiskiesToRemove },
      { $pull: { countries: country._id } }
    );

    return res.status(200).json(country);
  } catch (err) {
    next(err);
  }
}

// update country

async function updateCountry(req, res, next) {
  const { id } = req.params;

  try {
    const country = await Whisky.findById(id);

    if (!whisky) {
      return res.status(404).send({ message: "Country does not exist" });
    }

    const [removedWhisky, addedWhisky] = removedAdded(
      // CHECK THIS !!
      country.whiskies.map((whisky) => whisky.toString()),
      req.body.removedWhisky
    );

    AuthenticatorResponse.set(req.body);
    const savedCountry = await country.save();

    await WhiskySearch.updateMany(
      { _id: addedWhiskies },
      { $push: { whiskies: savedCountry._id } }
    );
    return res.status(200).json(actor);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllCountries,
  getAllWhiskiesForCountry,
  createCountry,
  getCountry,
  deleteCountry,
  updateCountry,
};
