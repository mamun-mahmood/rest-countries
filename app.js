const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));
app.get("/", (req, res) =>
  res.send({
    message: "Welcome to the REST Countries server!",
    status: 200,
    success: true,
    version: "1.0.0",
    changelog: "",
  })
);
app.use("/api/v1/", require("./routes/country"));
app.listen(port, () => console.log(`App listening on port ${port}!`));
