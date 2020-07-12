const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add pizza prefix to routes
router.use('/pizzas', pizzaRoutes);

module.exports = router;