const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users =  require("./routes/api/users")

const app = express();

app.use(bodyParser.json());
const db = require("./config/Keys").mongoURI;

mongoose
    .connect(db)
    .then(()=> console.log("mongoDB Connected......"))
    .catch(err => console.log(err));

app.use("/api/users", users)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server started on port ${port}`));


