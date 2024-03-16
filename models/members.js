const mongoose = require('mongoose')


const membersSchema = new mongoose.Schema({
    member_name: String,
    membership_type: {type: String, default: "Regular"},
    member_zip_code: Number,
    username: {type: String, required: true, unique: true},
    password: String,
    member_picture: String,
    member_bio: String,
    member_age: Number,
    member_skill: {type: String, enum:["Beginner", "Intermediate", "Advanced", "Pro"]},
    member_gender: {type: String, enum:["F", "M"]},
    member_preferred_court: {type: String,enum: ["Outdoors", "Indoors"]}, 
    member_groups: [{type: mongoose.Types.ObjectId, ref:"groups"}], default: ["No groups joined"],
    court_reservation: [{type: mongoose.Types.ObjectId, ref:"timeslot"}], default: ["No courts reserved"],
    event_reservation: [{type: mongoose.Types.ObjectId, ref:"events"}], default: ["No events reserved"], 
});

const Members = mongoose.model('members', membersSchema)
module.exports = Members;