const profile = () => {
    const self = {
        "name": "Chibuike Umechukwu",
        "github": "@comurule",
        "email": "umebuike@gmail.com",
        "mobile": "07039601940"
    };

    self.respond = () => {
        return {
            "message": "My Rule-Validation API",
            "status": "success",
            "data": self
        }
    };

    return self.respond();
};

module.exports = profile;