const mongoose = require('mongoose')


const timeslotSchema = new mongoose.Schema({ 
club_id: {type: mongoose.Types.ObjectId, ref:"courts"},
court: String,
open_slots: Number,
slot_date_and_time: {
    date: Date,
    availability: Boolean,
}
})

const Timeslots = mongoose.model('timeslot', timeslotSchema)
module.exports = Timeslots;