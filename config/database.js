const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODBURI)
const db = mongoose.connection;
db.on('error', () => console.log('connection error'))
db.on('connected', () => console.log(`we're connected`))
db.on('disconnected', () => console.log(`we're disconnected`))