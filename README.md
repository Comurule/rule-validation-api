# My Rule-Validation API
A Flutterwave Assessment. You can test the [heroku live link](https://comurule-flwsoln.herokuapp.com/api-docs/), using Swagger API Documentation 

## Table of Contents
1. <a href="#application-features">Application Features</a>
2. <a href="#how-to-use">How To Use</a>
3. <a href="#author">Author</a>
4. <a href="#license">License</a>

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Swagger Documentation](https://swagger.io/)


## Application Features

*  Get the profile of the repository author
*  Validate a given `data` object with a condition set in a `rule` object.


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Comurule/rule-validation-api.git

# Go into the repository
$ cd rule-validation-api

# Install dependencies
$ npm install or yarn install

# Run the app
$ npm start or yarn start
```

## API endpoints
```
GET Request -> localhost:3000/

response:
{
    "message": "My Rule-Validation API",
    "status": "success",
    "data": {
        "name": "Chibuike Umechukwu",
        "github": "@comurule",
        "email": "umebuike@gmail.com",
        "mobile": "07039601940"
    }
}

POST Request -> localhost:3000/validate-rule
body:
{
  "rule": {
    "field": "missions.count",
    "condition": "gte",
    "condition_value": 30
  },
  "data": {
    "name": "James Holden",
    "crew": "Rocinante",
    "age": 34,
    "position": "Captain",
    "missions": {
      "count": 45,
      "successful": 44,
      "failed": 1
    }
  }
}

response:
{
  "message": "field missions.count successfully validated.",
  "status": "success",
  "data": {
    "error": false,
    "field": "missions.count",
    "field_value": 45,
    "condition": "gte",
    "condition_value": 30
  }
}

```
## Author

Chibuike Umechukwu

## License

MIT

---

