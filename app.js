const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) =>
  res.send({
    message: "Welcome to the REST Countries server!",
    status: 200,
    success: true,
    version: "1.0.0",
    changelog: "",
  })
);
app.listen(port, () => console.log(`App listening on port ${port}!`));
