const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/getItems', async (req, res) => {
    try {
        const items = await Item.find({});
        res.send(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
