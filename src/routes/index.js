//Require Internal Dependencies
const controllers = require('../controllers');

const routes = (controllers) => {
    return (app) => {
        app.get('/', controllers.get_profile);

        app.post('/validate-rule', controllers.validate_rule);
    };
};


module.exports = routes(controllers);