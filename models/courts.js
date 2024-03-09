const mongoose = require('mongoose')


const courtsSchema = new mongoose.Schema({
    court_name: String,
    court_number: Number,
    court_type: String,
    available_dates: Date,
    available_timeslots: Date,
    amenities_available: String,
    court_condition: String,
    court_regulations: String,
    court_accesibility: String,
    court_scheduling_policy: String,
    img: String,
})

const Courts = mongoose.model('Courts', courtsSchemaSchema)
module.exports = Courts;