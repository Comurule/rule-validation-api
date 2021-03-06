/* eslint-disable no-restricted-syntax */
/* eslint-disable implicit-arrow-linebreak */

const operations = {
  eq: (data_field, condition_value) => data_field === condition_value,
  neq: (data_field, condition_value) => data_field !== condition_value,
  gte: (data_field, condition_value) => data_field >= condition_value,
  gt: (data_field, condition_value) => data_field > condition_value,
  contains: (data_field, condition_value) =>
    data_field.includes(condition_value),
};

const helper = {};

helper.validate_with_condition = (data_field, condition, condition_value) => {
  if (operations[condition]) {
    return operations[condition](data_field, condition_value);
  }
  return false;
};

helper.has_required_fields = (data, fields = []) => {
  if (fields.length) {
    for (const key of fields) {
      if (!data[key]) {
        return `${key} is required.`;
      }
    }
  }
  return true;
};

helper.has_valid_rule_field = (data) =>
  typeof data === 'object' && !Array.isArray(data);

helper.has_valid_data_field = (data) =>
  typeof data === 'string' || typeof data === 'object' || Array.isArray(data);

helper.get_rule_field_in_data_object = (dataObject, rule_field) => {
  // split the string along the period "." to get nested fields
  const fieldArr = rule_field.split('.');
  let data = dataObject;

  if (fieldArr.length) {
    for (const key of fieldArr) {
      // check if the key exists in the object(toString() changes falsy values to string)
      if (data[key] === null || data[key === undefined]) {
        return null;
      }

      // Update the data object to point to the current defined field
      data = data[key];
    }
  }

  return data;
};

module.exports = helper;
