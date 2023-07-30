// country routes
const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country");
router.get("/all", countryController.getAllCountries);
router.get("/country/:id/countries", countryController.getCountryById);
router.post("/", countryController.createCountry);
router.put("/country/:id/countries", countryController.updateCountry);
router.delete("/country/:id/countries", countryController.deleteCountry);
module.exports = router;
