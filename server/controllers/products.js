const {getProducts, getProduct, getStyles, getRelated} = require('../models/products.js')
const db = require('../database/db.js');


const getAllP = (req, res) => {
  console.log(req.query.count)
  // declare a page and count
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  // set a count LIMIT and an OFFSET for pagination
  let query = `SELECT * FROM products LIMIT ${count} OFFSET ${count * page - count}`;
  db.query(query, [], (err, response) => {
    if (err) {
      console.log(err, 'Select proper count/page number (>= 1)');
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
    SELECT id::text AS product_id,
      (
        SELECT COALESCE (array_to_json(array_agg(row_to_json(r))), '[]')
        from (
          SELECT id AS style_id, name, original_price, sale_price, default_style AS "default?",
            (
              SELECT array_to_json(array_agg(row_to_json(p)))
              from (
                SELECT thumbnail_url, url
                FROM photos
                WHERE styleid = styles.id
              ) p
            ) as photos,
            (
              SELECT json_object_agg(skus.id, json_build_object(
                'quantity', skus.quantity,
                'size', skus.size
              ))
              FROM skus
              WHERE skus.styleid = styles.id
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
      console.log(response.rows[0].row_to_json, 'THIS IS getPStyles ---');
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

  console.log(req.params.id);

  let query = `SELECT row_to_json(related)
  from (
    SELECT array_agg(related_product_id)
    FROM related
    WHERE current_product_id = ${req.params.id}
  ) as related
  `;
  db.query(query, [], (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.rows[0].row_to_json.array_agg, 'THIS IS getPRelated ---');
      console.log(response.rows, 'THIS IS getPRelated ---');
      res.status(200).json(response.rows[0].row_to_json.array_agg);
    }
  })


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