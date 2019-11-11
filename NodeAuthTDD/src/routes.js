const routes = require("express").Router();

// Middlewares
const authMiddleware = require('./app/middleware/auth');

// Controllers
const SessionController = require('./app/controllers/SessionController');

// Routes
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
