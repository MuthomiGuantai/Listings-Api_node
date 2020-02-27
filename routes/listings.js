const express = require('express');
const router = express.Router();
const Listing = require('../models/listing')

router.get('/', (req, res) => {
    res.send('we are on listings');
});

router.post('/', (req, res) => {
    const post = new Listing({
        title: req.body.title,
        description: req.body.description,
        county: req.body.county,
        realtor: req.body.realtor,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    });
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err });
    })
});

module.exports = router