//Require External Dependencies
const express = require('express');
const cors = require('cors');

//Require Internal dependencies
const routes = require('./routes');

const app = express();

//Enable cors
const origin = ["*"];
const corsOptions = {
    allowedHeaders: [
        "Origin",
        " X-Requested-With",
        "Content-Type",
        "Accept",
        "Authorization",
        "X-Access-Token",
    ],
    origin: origin,
    methods: ["OPTIONS", "GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 200,
}

//Application Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Applications Routes
routes(app);

module.exports = app;