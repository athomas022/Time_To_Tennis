const mongoose = require('mongoose')


const groupsSchema = new mongoose.Schema({
    group_name: String,
    group_description: String,
    group_type: String,
    group_membership_criteria: String,
    group_courts: [{type: mongoose.Types.ObjectId, ref:"courts", }], deafault: ["No courts reserved"],
    group_admin: [String],
    group_member_directory: [{type: mongoose.Types.ObjectId, ref:"members", }], deafault: ["No members yet"],
    group_upcoming_events: [{type: mongoose.Types.ObjectId, ref:"members", }], deafault: ["No events scheduled yet"],
    group_rules: String,
    announcements: [String],
    zip_code: Number,
})

const Groups = mongoose.model('Groups', groupsSchema)
module.exports = Groups;