const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const VehicleSchema = mongoose.Schema({
    type: String,
    name: String,
    number: String,
    kms: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', VehicleSchema, 'Vehicle');