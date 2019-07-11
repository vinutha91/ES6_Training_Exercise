const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    kms: Number,
    totalFuelPrice: Number,
    pricePerLtr: Number,
    date: Date,
    number: { type: String, unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', TripSchema, 'Trip');