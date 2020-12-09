require('dotenv').config();
const express = require("express");
const app = express();
const db = process.env.DB_CONN;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

// const users = require("./routes/api/users");
// const tweets = require("./routes/api/tweets");

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

// app.use(passport.initialize());
// require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/users", users);
// app.use("/api/tweets", tweets);

const port = 8080
// const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server is running on port ${port}`));