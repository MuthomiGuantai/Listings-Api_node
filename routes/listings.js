const express = require('express');
const router = express.Router();
const Listing = require('../models/listing')

router.get('/', (req, res) => {
    res.send('we are on listings');
});

router.post('/', (req, res) => {
    console.log(req.body) ;
});

module.exports = router