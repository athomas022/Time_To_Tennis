const mongoose = require('mongoose')


const membersSchema = new mongoose.Schema({
    member_ID: String,
    member_name: String,
    membership_type: String,
    member_zip_code: Number,
    username: {type: String, required: true, unique: true},
    password: String,
    member_picture: String,
    member_bio: String,
    member_age: Number,
    member_skill: String,
    member_gender: String,
    member_preferred_court: String,
    member_groups: [String],
    court_reservation: [{type: String, default:"No courts reserved"}],
    event_reservation: [{type: String, default:"No Events scheduled"}], 
    // member_groups: [{type: mongoose.Types.ObjectId, ref:"groups"}],
    // court_reservation: [{type: mongoose.Types.ObjectId, ref:"timeslot"}],
    // event_reservation: [{type: mongoose.Types.ObjectId, ref:"events"}], 
});

const Members = mongoose.model('members', membersSchema)
module.exports = Members;