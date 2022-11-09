require('dotenv').config();
const express = require("express");
const router = require('./routes.js');
const path = require("path");
const app = express();
// declaring PORT
let PORT = 3000;
// add DB
const db = require('./database/db.js');

app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
// app.use(express.static('./client/dist'));

// request are done here through routes
app.use('/api', router);

// authentication using loader.io
app.get('/loaderio-0dcf2c50cd732e4fee6a4f5e32c0755e.html', (req, res) => {
  res.send('loaderio-0dcf2c50cd732e4fee6a4f5e32c0755e')
});



app.listen(PORT);
console.log(`server listening at http://localhost:${PORT}`);
