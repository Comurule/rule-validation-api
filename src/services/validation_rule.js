const rule_validate = (dataObject) => {
    const r = {
        "rule": {
            "field": "missions",
            "condition": "gte",
            "condition_value": 30
        },
        "data": {
            "name": "James Holden",
            "crew": "Rocinante",
            "age": 34,
            "position": "Captain",
            "missions": 45
        }
    };
    const self = {
        success_message: '',
        success_data: {},
        error_message: '',
        conditions: ['eq', 'neq', 'gt', 'gte', 'contains']
    };

    self.check_payload = () => {
        if (!Object.keys(dataObject).length) {
            self.error_message = "Invalid JSON payload passed.";
        }
        return self;
    };

    self.has_required_fields = (data, fields = []) => {
        if (self.error_message) return self;

        if (fields.length) {
            fields.map(key => {
                if (key && !data[key.trim()]) {
                    self.error_message = `${key} is required.`;
                }
            })
            return self;
        }
    };

    self.has_valid_rule_field = (data) => {
        if (self.error_message) return self;

        if (typeof (data) !== 'object' || Array.isArray(data)) {
            self.error_message = "rule should be an object.";
        }

        return self;
    };

    self.is_valid_data_field = (data) => {
        if (self.error_message) return self;

        if (
            !helper.is_valid_data(data, 'string') ||
            !helper.is_valid_data(data, 'object') ||
            !helper.is_valid_data(data, 'array')
        ) {
            self.error_message = "data should be an object or an array or a string."
        }

        return self;
    };

    self.is_valid_field = (data, dataType) =>{
        
    };

    self.respond = () => {
        if (self.error_message) {
            return {
                "message": self.error_message,
                "status": "error",
                "data": null
            };
        }

        return {
            "message": self.success_message,
            "status": "success",
            "data": self.success_data
        }
    };


    self.initialize = () => {
        return self
            .check_payload()
            .has_required_fields(dataObject, ['rule', 'data'])
            .has_valid_rule_field(dataObject.rule)
            .has_required_fields(dataObject.rule, ['condition_value', 'condition', 'field'])
            .is_valid_data_field(dataObject.data)
            .respond()
    };

    return self.initialize();
};

module.exports = rule_validate;

const helper = {};
helper.is_valid_data = (data, dataType) => dataType == 'array' ? typeof (data) == dataType : Array.isArray(data);