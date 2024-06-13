const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use('/', require('./routes/popRoutes'));

app.listen(8000, () => console.log('Server started on port 8000'));