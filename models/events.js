const mongoose = require('mongoose')


const eventsSchema = new mongoose.Schema({
    event_name: String,
    event_date: Date,
    event_duration: Number,
    event_description: String,
    organizing_group: String,
    event_slots: Number,
    event_registration_fees: Number,
    event_format: String,
    member_skill_level: String,
    event_rules: String,
    event_equipment_needed: String,
})

const Events = mongoose.model('Events', eventsSchema)
module.exports = Events;