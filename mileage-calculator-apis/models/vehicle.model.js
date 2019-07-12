const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    type: String,
    name: String,
    number: { type: String, unique: true },
    kms: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', VehicleSchema, 'Vehicle');