const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventsSchema = new Schema({
    event_name: String,
    event_date: Date,
    event_duration: Number,
    event_description: String,
    created_by: {type: mongoose.Schema.Types.ObjectId, ref:"Members"},
    organizing_group: {type: mongoose.Schema.Types.ObjectId, ref:"Groups"},
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