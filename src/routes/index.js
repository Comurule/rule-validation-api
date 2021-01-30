const routes = (controllers) => (app) => {
  app.get('/', controllers.get_profile);

  app.post('/validate-rule', controllers.validate_rule);
};

const controllers = require('../controllers');

module.exports = routes(controllers);
