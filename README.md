# My Rule-Validation API
A Flutterwave Assessment. You can test the [heroku live link](https://github.com/Comurule/rule-validation-api), using Swagger API Documentation 

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
POST Request -> localhost:9000/v1/subscribe/userUpdate
body:
  url: http://myurl.com


response:
{
    "success": true,
    "message": "Successfully subscribes to topic",
    "data": {
        "topic": "user",
        "url": "http://myurl.com"
    }
}

POST Request -> localhost:3000/v1/publish/userUpdate
body:
  message: {
      "user": {
          "name": "juliet",
          "age": 25
      },
      "status": "active
  }

response:
{
    "success": true,
    "message": "Successfully publishes to bar subscribers",
    "topic": "userUpdate",
    "data": {
      "user": {
          "name": "juliet",
          "age": 25
      },
      "status": "active
  }
}

```
## Author

Chibuike Umechukwu

## License

MIT

---

