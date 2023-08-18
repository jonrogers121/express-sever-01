require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const getItemsRoute = require('./routes/getItems');
const postItemsRoute = require('./routes/postItems');

app.use(getItemsRoute);
app.use(postItemsRoute);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
