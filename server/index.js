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
app.get('/loaderio-e72f72b081c9c00a2a315e102dc8f269.html', (req, res) => {
  res.send('loaderio-e72f72b081c9c00a2a315e102dc8f269')
});


app.listen(PORT);
console.log(`server listening at http://localhost:${PORT}`);


// COPY products FROM ‘/Users/liuqian/Desktop/CS learning_Hack Reactor /2209 HR immersive course/SDC/SDC-Product-API/data/product.csv’ (format csv, null “null”, DELIMITER ‘,’, HEADER);
// COALESCE(styles.sale_price, 0) AS sale_price,