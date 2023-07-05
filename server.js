// Desc: Main entry point for the application
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Create express app
const app = express({path:'config.env'});

dotenvconfig()
const PORT = process.env.PORT || 8080;

//morgan model
// log requests
app.use(morgan('tiny'));

// Parse requests of content-type - application/x-www-form-urlencoded
app.get('/', (req, res) => {
    res.send('CRUD APP');
});

//
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)});