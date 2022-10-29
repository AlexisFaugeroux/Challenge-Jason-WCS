// Load environment variables
require('dotenv').config();

// Require dependencies
const express = require('express');
const router = require('./app/routers/crewRouter.js');

// Create express app
const app = express();

// Express body parser allowing to parse input data in JSON format
// will be use to hanlde POST request body
app.use(express.json());

// Use Express router
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is launched at http://localhost:${PORT}`);
});
