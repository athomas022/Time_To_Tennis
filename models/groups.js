const mongoose = require('mongoose')


const groupsSchema = new mongoose.Schema({
    group_name: String,
    group_description: String,
    group_type: String,
    group_membership_criteria: String,
    // group_courts: [{type: mongoose.Types.ObjectId, ref:"courts", }],
    group_courts: [String],
    group_admin: [String],
    group_member_directory: [String],
    group_upcoming_events: [String],
    group_rules: String,
    announcements: [String],
    zip_code: Number,
})

const Groups = mongoose.model('Groups', groupsSchema)
module.exports = Groups;