// Load environment variables
require('dotenv').config();

// Require dependencies
const express = require('express');
const multer = require('multer');
const router = require('./app/routers/crewRouter.js');

// Create express app
const app = express();

// Express body parser allowing to parse input data in JSON format
app.use(express.json());

// Adding a body parser to extract data from POST requests in multipart
// in order to process form-data objects
const multipartParser = multer();
// Using .non() method to indicate that no file will be submitted
app.use(multipartParser.none());

// Use Express router
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is launched at http://localhost:${PORT}`);
});
