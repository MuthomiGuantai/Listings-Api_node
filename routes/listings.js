const express = require('express');
const router = express.Router();
const Listing = require('../models/listing')

// fetches the listings
router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings)
    }catch (err){
        res.json({message:err})
    }
});
//submits the listings
router.post('/', async (req, res) => {
    const post = new Listing({
        title: req.body.title,
        description: req.body.description,
        county: req.body.county,
        realtor: req.body.realtor,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    }) ;
    try {
        const savedListing = await post.save();
        res.json(savedListing);
    } catch(err){
        res.json({message: err});
    }
    
});
//specific listing
router.get('/:listingId', async (req, res) => {
    try{
        const listing = await Listing.findById(req.params.listingId);
        res.json(listing)
    }catch (err){
        res.json({message:err})
    }
})
//delete a specific listing
router.delete('/:listingId', async (req,res) => {
    try{
        const removedListing = await Listing.remove({_id: req.params.listingId});
        res.json(removedListing)
    }catch(err){
        res.json({message:err})
    }
})
//update a listing
router.patch('/:listingId', async (req,res) => {
    try{
        const UpdatedListing = await Listing.updateOne({_id: req.params.listingId}, 
            {$set: {title: req.body.title}});
        res.json(UpdatedListing)
    }catch(err){
        res.json({message:err})
    }
})
module.exports = router