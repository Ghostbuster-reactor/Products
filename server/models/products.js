const axios = require('axios');


function getProducts(page, count) {
  let options = {
    method: 'GET',
    url: ``,
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `${process.env.TOKENS}`
    }
  }
  return axios(options);
}

function getProduct(id) {
  let options = {
    method: 'GET',
    url: ``,
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `${process.env.TOKENS}`
    }
  }
  return axios(options);
}

function getStyles(id) {
  let options = {
    method: 'GET',
    url: ``,
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `${process.env.TOKENS}`
    }
  }
  return axios(options);
}

function getRelated(id) {
  let options = {
    method: 'GET',
    url: ``,
    headers: {
      'User-Agent': 'request',
      // 'Authorization': `${process.env.TOKENS}`
    }
  }
  return axios(options);
}


module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.getStyles = getStyles;
module.exports.getRelated = getRelated;