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
    }) ;
    async function lister(){
        try {
            const savedListing = await post.save();
            res.json(savedListing);
        } catch(err){
            res.json({message: err});
        }
    }
    lister()
    
});

module.exports = router