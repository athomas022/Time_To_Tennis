const express = require('express');
const app = express();
require('./config/database')

const courtsController = require('./controllers/courtsController')
const eventsController = require('./controllers/eventsController')
const groupsController = require('./controllers/groupsController')
const membersController = require('./controllers/groupsController')

// MIDDELWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/', characterController)
// app.use('/show', showController)

app.listen(3000, () => {
    console.log('server started on 3000');
})