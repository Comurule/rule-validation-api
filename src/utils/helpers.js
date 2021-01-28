const helper = {};

helper.conditions = (data_field, condition, condition_value) => {
    const op = {
        "eq": (data_field, condition_value) => data_field == condition_value,
        "neq": (data_field, condition_value) => data_field != condition_value,
        "gte": (data_field, condition_value) => data_field >= condition_value,
        "gt": (data_field, condition_value) => data_field > condition_value,
        "contains": (data_field, condition_value) => data_field.includes(condition_value)
    };

    if (op[condition]) {
        return op[condition](data_field, condition_value);
    }
};

helper.is_payload_json = (dataObject) => {
    return (Object.keys(dataObject).length)
};

helper.has_required_fields = (data, fields = []) => {
    if (fields.length) {
        for (let key of fields) {
            if (key && !data[key.trim()]) {
                return `${key} is required.`;
            }
        }
    }
    return true;
};

helper.has_valid_rule_field = (data) => {
    return (typeof (data) == 'object' && !Array.isArray(data))
};

helper.has_valid_data_field = (data) => {
    return (
        typeof (data) == 'string' ||
        typeof (data) == 'object' ||
        Array.isArray(data)
    )
};

helper.get_rule_field_in_data_object = (dataObject, rule_field) => {
    //split the string along the period "." to get nested fields
    const fieldArr = rule_field.split('.');
    let data = dataObject;

    if (fieldArr.length) {
        for (let key of fieldArr) {

            //check if the key exists in the object(toString() changes falsy values to string)
            if (!data[key].toString()) {
                return null;
            }

            //Update the data object to point to the current defined field
            data = data[key];
        }
    }

    return data;
};

module.exports = helper;