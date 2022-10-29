// Require dependencies
const express = require('express');

// Load environment variables
require('dotenv').config();

// Create express app
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is launched at http://localhost:${PORT}`);
});
