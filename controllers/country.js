// country controller
const Country = require("../models/country");
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.send({
      message: "All countries",
      status: 200,
      success: true,
      countries,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};
const getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    res.send({
      message: "Country found",
      status: 200,
      success: true,
      country,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};
const createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);
    res.send({
      message: "Country created",
      status: 200,
      success: true,
      country,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};
const updateCountry = async (req, res) => {
  try {
    const country = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({
      message: "Country updated",
      status: 200,
      success: true,
      country,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};
const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    res.send({
      message: "Country deleted",
      status: 200,
      success: true,
      country,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
      success: false,
    });
  }
};
module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
};
