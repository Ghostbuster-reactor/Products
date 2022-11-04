const {getProducts, getProduct, getStyles, getRelated} = require('../models/products.js')
const db = require('../database/db.js');

const getAllP = (req, res) => {

  let query = `SELECT * FROM products LIMIT 5`;
  db.query(query, [], (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.rows, 'THIS IS getALLP ---');
      res.status(200).json(response.rows);
    }
  })

  // MODELS SECTION ---
  // getProducts(page, count)
  //   .then(result => {
  //     res.status(200).send(result.data);
  //   })
  //   .catch(e => console.log('products getAll error', e.response.data))
}

const getOne = (req, res) => {

  console.log(req.params.id);

  let query = `SELECT row_to_json(p)
  from (
    SELECT id, name, slogan, description, category, default_price,
      (
        SELECT array_to_json(array_agg(row_to_json(f)))
        from (
          SELECT feature, value
          FROM features
          WHERE product_id = products.id
        ) f
      ) as features
    FROM products
    WHERE id = ${req.params.id}
  ) p
  `;
  db.query(query, [], (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.rows[0].row_to_json, 'THIS IS getOne ---');
      res.status(200).json(response.rows[0].row_to_json);
    }
  })




  // MODELS SECTION ---
  // let id = req.params.id || {id: '40344'};
  // console.log('get one', req.params);
  // getProduct(id)
  //   .then(result => {
  //     res.status(200).send(result.data);
  //   })
  //   .catch(e => console.log('products getOne error', e.response.data))
}

const getPStyles = (req, res) => {


  console.log(req.params.id);

  let query = `SELECT row_to_json(p)
  from (
    SELECT id,
      (
        SELECT array_to_json(array_agg(row_to_json(r)))
        from (
          SELECT id, name, original_price, sale_price, default_style,
            (
              SELECT array_to_json(array_agg(row_to_json(p)))
              from (
                SELECT thumbnail_url, url
                FROM photos
                WHERE styleid = styles.id
              ) p
            ) as photos,
            (
              SELECT json_build_object(s)
              from (
                SELECT size, quantity
                FROM skus
                WHERE styleid = styles.id
              ) s
            ) as skus
          FROM styles
          WHERE productid = products.id
        ) r
      ) as results
    FROM products
    WHERE id = ${req.params.id}
  ) p
  `;
  db.query(query, [], (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.rows[0].row_to_json, 'THIS IS getOne ---');
      res.status(200).json(response.rows[0].row_to_json);
    }
  })


  // MODELS SECTION ---
  // getStyles(req.params.id)
  //   .then(result => {
  //     res.status(200).send(result.data);
  //   })
  //   .catch(e => console.log('products getStyles error', e.response.data))
}

const getPRelated = (req, res) => {





  // MODELS SECTION ---
  // getRelated(req.params.id)
  //   .then(result => {
  //     res.status(200).send(result.data)
  //   })
  //   .catch(e => console.log('products getRelated error', e.response.data))
}


module.exports.getAllP = getAllP;
module.exports.getOne = getOne;
module.exports.getPStyles = getPStyles;
module.exports.getPRelated = getPRelated;