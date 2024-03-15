const mongoose = require('mongoose')


const timeslotSchema = new mongoose.Schema({ 
club: String,
court: String,
open_slots: Number,
slot_date_and_time: {
    date: Date,
    availability: Boolean,
}
})

const Timeslot = mongoose.model('timeslot', timeslotSchema)
module.exports = Timeslot;