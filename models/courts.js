const mongoose = require('mongoose')


const courtsSchema = new mongoose.Schema({
    club_name: String,
    court: [{court_number: [String], open_slots: [Number]
    }],
    court_type: String,
    court_description: String,
    amenities_available: String,
    court_condition: String,
    court_regulations: String,
    court_accesibility: String,
    court_scheduling_policy: String,
    img: String,
    zip_code: Number,
    reservation_fees: Number,
    cancellation_fees: Number,
})

const Courts = mongoose.model('Courts', courtsSchema)
module.exports = Courts;