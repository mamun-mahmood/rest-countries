// country model
const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Country name is required"],
    unique: true,
  },
  capital: {
    type: String,
    required: [true, "Capital name is required"],
  },
  currency: {
    type: String,
    required: [true, "Currency name is required"],
  },
  language: {
    type: String,
    required: [true, "Language name is required"],
  },
  population: {
    type: Number,
    required: [true, "Population is required"],
  },
  flag: {
    type: String,
    required: [true, "Flag is required"],
  },
  region: {
    type: String,
    required: [true, "Region is required"],
  },
  subregion: {
    type: String,
    required: [true, "Subregion is required"],
  },
  demonym: {
    type: String,
    required: [true, "Demonym is required"],
  },
  area: {
    type: Number,
  },
  nativeName: {
    type: String,
    required: [true, "Native name is required"],
  },
  numericCode: {
    type: String,
    required: [true, "Numeric code is required"],
  },
  alpha3Code: {
    type: String,
    required: [true, "Alpha3 code is required"],
  },
  altSpellings: {
    type: Array,
  },
  callingCodes: {
    type: Array,
  },
  topLevelDomain: {
    type: Array,
  },
  timezones: {
    type: Array,
  },
  borders: {
    type: Array,
  },
  latlng: {
    type: Array,
  },
  translations: {
    type: Object,
  },
  cioc: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const Country = mongoose.model("Country", countrySchema);
