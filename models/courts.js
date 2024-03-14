const mongoose = require('mongoose')


const courtsSchema = new mongoose.Schema({
    club_name: String,
    court: [{
        court_number: [Number],
        openslots: [Number],
        availability: {
            days: {
                saturday: {
                    type: Boolean,
                },
                sunday: {
                    type: Boolean,
                },
                monday: {
                    type: Boolean,
                },
                tuesday: {
                    type: Boolean,
                },
                wednesday: {
                    type: Boolean,
                },
                thursday: {
                    type: Boolean,
                },
                friday: {
                    type: Boolean,
                },
            },
            time: {
                type: [String],
                enum: ["08:00:00", "10:00:00", "14:00:00", "16:00:00", "20:00:00"]

            }
        }
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