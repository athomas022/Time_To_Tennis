const mongoose = require('mongoose')


const eventsSchema = new mongoose.Schema({
    event_name: String,
    event_date: Date,
    event_duration: Number,
    event_description: String,
    created_by: [{type: mongoose.Types.ObjectId, ref:"Members"}], default: [{}],
    organizing_group: [{type: mongoose.Types.ObjectId, ref:"Groups"}], default: [{}],
    event_slots: Number,
    event_registration_fees: Number,
    event_format: String,
    member_skill_level: String,
    event_rules: String,
    event_equipment_needed: String,
    court: {type: mongoose.Types.ObjectId, ref:"courts"}
})

const Events = mongoose.model('Events', eventsSchema)
module.exports = Events;