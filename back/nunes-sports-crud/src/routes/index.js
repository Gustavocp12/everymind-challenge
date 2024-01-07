const productsRoute = require('./products');

module.exports = app => {
    app.use(
        productsRoute
    );
}