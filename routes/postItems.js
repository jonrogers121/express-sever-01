const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.post('/addItem', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.send(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
