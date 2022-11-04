const controllers = require('./controllers/index.js');
const router = require('express').Router();

// products
router.get('/products', controllers.products.getAllP);
router.get('/products/:id', controllers.products.getOne);
router.get('/products/:id/styles', controllers.products.getPStyles);
router.get('/products/:id/related', controllers.products.getPRelated);


module.exports = router;