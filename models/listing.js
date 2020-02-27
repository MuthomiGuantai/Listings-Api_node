const mongoose = require('mongoose');

const ListingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    county:{
        type: String,
        required: true
    },
    realtor: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageURL: {
        type: String
    }

});

module.exports = mongoose.model('listings', ListingSchema);