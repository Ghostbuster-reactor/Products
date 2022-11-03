require('dotenv').config();
const express = require("express");
const router = require('./routes.js');
const path = require("path");
const app = express();
// declaring PORT
let PORT = process.env.PORT || 3000;
// add DB
const db = require('./database/db.js');

app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use(express.static('./client/dist'));

// request are done here through routes
app.use('/api', router);


app.listen(PORT);
console.log(`server listening at http://localhost:${PORT}`);
