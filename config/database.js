const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})

module.exports = {
    Courts: require('../models/courts'),
    Events: require('../models/events'),
    Groups: require('../models/groups'),
    Members: require('../models/members'),
    seedCourts: require("./courtsSeed"),
    seedEvents: require("./eventsSeed"),
    seedGroups: require("./groupsSeed"),
    seedMembers: require("./membersSeed"),
}
