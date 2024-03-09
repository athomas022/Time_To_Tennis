const courts = require('./models/courts');
const express = require('express');
const router = express.Router();


//SEED ROUTE
router.get("/seed", (req, res) => {
   courts.insertMany([

      {court_name: "Central Park Tennis Courts",
       court_number: 1,
       court_type: "Outdoor",
       available_dates: 2024-03-10,
    available_timeslots: Date,
    amenities_available: String,
    court_condition: String,
    court_regulations: String,
    court_accesibility: String,
    court_scheduling_policy: String,
    img: String,
      },
    ])
    .then((responseFromDatabase) => {
      console.log(responseFromDatabase);
      res.send(responseFromDatabase);
    });
});