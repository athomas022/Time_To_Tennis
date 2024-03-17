const mongoose = require('mongoose')


const groupsSchema = new mongoose.Schema({
    group_name: String,
    group_description: String,
    group_type: String,
    group_membership_criteria: String,
    group_courts: [{type: mongoose.Types.ObjectId, ref:"Courts", }], default: [{}],
    group_admin: [String],
    group_member_directory: [{type: mongoose.Types.ObjectId, ref:"Members", }], default: [{}],
    group_upcoming_events: [{type: mongoose.Types.ObjectId, ref:"Members", }], default: [{}],
    group_rules: String,
    announcements: [String],
    zip_code: Number,
})

const Groups = mongoose.model('Groups', groupsSchema)
module.exports = Groups;