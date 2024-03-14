require('dotenv').config()
const path = require('path');
const express = require('express');
const session = require('express-session')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const courtsController = require('./controllers/courtsController')
const eventsController = require('./controllers/eventsController')
const groupsController = require('./controllers/groupsController')
const membersController = require('./controllers/membersController')
const sessionsController = require('./controllers/sessionsController')



const db = require('./config/database');
const isAuthenticated = require('./controllers/isAuthenticatedController');

const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {e
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



// MIDDELWARE
app.use(express.static('public'))
app.use(connectLiveReload());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false
    })
  )


//MOUNT ROUTES
app.get('/', function (req, res) {
    res.send('This is the home page')
});

app.get("/seed", function (req, res){
    db.Courts.deleteMany({})
        .then(removedCourtsData => {
            console.log(`Removed ${removedCourtsData.deletedCount} courts from the database`)
            db.Courts.insertMany(db.seedCourts)
                .then(addedCourts => {
                    console.log(`Added ${addedCourts.length} courts to the database`)
                })
        })
        db.Events.deleteMany({})
        .then(removedEventsData => {
            console.log(`Removed ${removedEventsData.deletedCount} events from the database`)
            db.Events.insertMany(db.seedEvents)
                .then(addedEvents => {
                    console.log(`Added ${addedEvents.length} events to the database`)
                })
        })
        db.Groups.deleteMany({})
        .then(removedGroupsData => {
            console.log(`Removed ${removedGroupsData.deletedCount} groups from the database`)
            db.Groups.insertMany(db.seedGroups)
                .then(addedGroups => {
                    console.log(`Added ${addedGroups.length} events to the database`)
                })
        })   
        db.Members.deleteMany({})
        .then(removedMembersData => {
            console.log(`Removed ${removedMembersData.deletedCount} members from the database`)
            db.Members.insertMany(db.seedMembers)
                .then(addedMembers => {
                    console.log(`Added ${addedMembers.length} members to the database`)
                })
        })   
    });



app.use("/courts", courtsController)
app.use("/events", eventsController)
app.use("/groups", groupsController)
app.use("/members", membersController)
app.use('/sessions', sessionsController)
app.use(isAuthenticated)


app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});