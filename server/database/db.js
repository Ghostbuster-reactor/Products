const { Pool } = require("pg");
const Promise = require("bluebird");

// use .env for this data
const pool = new Pool({
  host: "localhost",
  user: "Fer",
  password: "",
  database: "postgres",
  port: 5432,
});


// bluebird ----------------------------
const db = Promise.promisifyAll(pool, { multiArgs: true });

// if .connectASYNC maybe no need for schema.sql file? ---
db.connectAsync()
  .then(() => console.log(`Connected to Postgres`))
  .then(() =>
    // Expand this table definition as needed: PRODUCTS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS products (id serial NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, slogan VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, category VARCHAR(255) NOT NULL, default_price VARCHAR(255) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: STYLES ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS styles (id serial NOT NULL PRIMARY KEY, productid INT REFERENCES products(id), name VARCHAR(255) NOT NULL, sale_price INT, original_price INT, default_style BOOLEAN)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: RELATED ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS related (id serial NOT NULL PRIMARY KEY, current_product_id INT, related_product_id INT)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: FEATURES ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS features (id serial NOT NULL PRIMARY KEY, product_id INT REFERENCES products(id), feature VARCHAR(255) NOT NULL, value VARCHAR(255) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: PHOTOS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS photos (id serial NOT NULL PRIMARY KEY, styleid INT REFERENCES styles(id), url VARCHAR(255) NOT NULL, thumbnail_url VARCHAR(255) NOT NULL)"
    )
  )
  .then(() =>
    // Expand this table definition as needed: SKUS ---
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS skus (id serial NOT NULL PRIMARY KEY, styleid INT REFERENCES styles(id), size VARCHAR(255) NOT NULL, quantity INT)"
    )
  )
  .catch((err) => console.log(err));


module.exports = db;



