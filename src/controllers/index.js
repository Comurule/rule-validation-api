/**
 * Handles all Route Requests
 * @param {object} services - Imported Services Object
 */
const controllers = (services) => ({
  get_profile: (req, res) => {
    const profile = services.get_profile();

    return res.status(200).json(profile);
  },

  validate_rule: (req, res) => {
    const result = services.rule_validate(req.body);

    const statusCode = result.status === 'error' ? 400 : 200;
    return res.status(statusCode).json(result);
  },
});

const services = require('../services');

module.exports = controllers(services);
