const express = require("express");

const bodyParser = require("body-parser");

const healthRoutes = require("./routes/health-route.js");

const app = express();

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use("/", healthRoutes);

app.listen(3000);

// porque é necessário exportar o app?
module.exports = app;
