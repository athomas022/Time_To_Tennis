//SEED ROUTE
const courts = [
    { club_name: "Central Park Tennis Club",
      court: [
        {court_number: "Court 1",
         openslots: 4,
        },
        {court_number: "Court 5",
          openslots: 2,
        },
        {court_number: "Court 25",
        openslots: 6,
        }],
      timeslots: "XX",
      court_type: "Outdoor",
      court_description: "Located in Central Park, these courts are ideal for players looking for outdoor tennis. With flexible timings, players can enjoy a game amidst the park's scenic beauty. Amenities include restrooms and a drinking fountain. Wheelchair accessibility ensures inclusivity. Reservation is recommended, with a cancellation fee of $5.",
      amenities_available: "Restrooms, Drinking Fountain",
      court_condition: "Good",
      court_regulations: "No pets allowed, Proper tennis attire required",
      court_accesibility: "Wheelchair accessible",
      court_scheduling_policy: "Schedule on the reservation website. Waitlist is first come first served. Cancellation fees is half of the reservation fees",
      img: "public/photos/angela-bailey-pSr9S6po7Ps-unsplash.jpg",
      zip_code: 75010,
      reservation_fees: 10,
      cancellation_fees: 5,
    },
    { club_name: "City Hall Tennis Club",
    court: [
      {court_number: "Court 6",
       openslots: 4,
      },
      {court_number: "Court 7",
        openslots: 4,
      },
      {court_number: "Court 12",
      openslots: 4,
      }],
  
    court_type: "Outdoor",
    court_description: "Situated near City Hall, these outdoor courts offer flexible availability. Equipped with a scoreboard and bleachers, players can experience a competitive atmosphere. No eating on the court is allowed, and proper tennis attire is required. Wheelchair accessibility ensures convenience. Reservation is required, with cancellation fees equal to reservation fees.",
    amenities_available: "Scoreboard, Bleachers, Restrooms",
    court_condition: "Good",
    court_regulations: "No eating on the court, proper tennis attire required, Non-marking shoes required",
    court_accesibility: "Wheelchair accessible",
    court_scheduling_policy: "Schedule on the reservation website. Cancellation fees are equal to the reservation fees",
    img: "public/photos/john-thomas-xTR1RmJ5cYY-unsplash.jpg",
    zip_code: 75010,
    reservation_fees: 7,
    cancellation_fees: 7,
  },


  { club_name: "Riverside Park Tennis Club",
  court: [
    {court_number: "Court 3",
     openslots: 2,
    },
    {court_number: "Court 4",
      openslots: 6,
    },
    {court_number: "Court 5",
    openslots: 4,
    }],

  court_type: "Indoor",
  court_description: "Located in Riverside Park, these indoor courts provide a comfortable environment for tennis enthusiasts. Available on Monday, Wednesday, and Friday, players can enjoy excellent court conditions. Amenities include goalposts and benches. Reservation is required, and no smoking is allowed on the premises.",
  amenities_available: "Goalposts, Benches",
  court_condition: "Excellent",
  court_regulations: "No smoking allowed, Non-marking shoes required",
  court_accesibility: "Stairs access only",
  court_scheduling_policy: "Reservation is required.",
  img: "public/photos/isaac-e-quezada-D3Vu3v3BYXQ-unsplash.jpg",
  zip_code: 75010,
  reservation_fees: 15,
  cancellation_fees: 8,
},
{ club_name: "Community Center Tennis Club",
court: [
  {court_number: "Court 1",
   openslots: 4,
  },
  {court_number: "Court 3",
    openslots: 4,
  },
  {court_number: "Court 6",
  openslots: 4,
  }],
court_type: "Indoor",
court_description: "Situated at the Community Center, these indoor courts offer availability on Monday, Wednesday, and Friday. Tennis balls are provided for players' convenience. With good court conditions, players can focus on their game. Reservation is required for these courts.",
amenities_available: "Tennis balls provided",
court_condition: "Good",
court_regulations: "No outside equipment allowed, Proper tennis attire required",
court_accesibility: "Elevator access available",
court_scheduling_policy: "Reservation is required.",
img: "public/photos/chris-chondrogiannis-oN_rL__KiiU-unsplash.jpg",
zip_code: 75035,
reservation_fees: 16,
cancellation_fees: 8,
},
{ club_name: "Pine Grove Park Tennis Club",
court: [
  {court_number: "Court 10",
   openslots: 4,
  },
  {court_number: "Court 2",
    openslots: 4,
  },
  {court_number: "Court 3",
  openslots: 4,
  }],
court_type: "Outdoor",
court_description: "Nestled in Pine Grove Park, these outdoor courts offer availability on Tuesdays. Equipped with lights for night play and a seating area, players can enjoy tennis in a serene environment. Proper tennis attire is required, and reservation is recommended.",
amenities_available: "Lights for night play, Seating area",
court_condition: "Good",
court_regulations: "Proper tennis attire required, tennis racket needed",
court_accesibility: "Ramp access available",
court_scheduling_policy: "Reservation is nice to have but first come and first served.",
img: "public/photos/lester-yoIt3Wxe0sI-unsplash.jpg",
zip_code: 75035,
reservation_fees: 0,
cancellation_fees: 0,
},
{ club_name: "Beachside Tennis Club",
court: [
  {court_number: "Court 7",
   openslots: 2,
  },
  {court_number: "Court 10",
    openslots: 4,
  },
  {court_number: "Court 11",
  openslots: 4,
  }],
court_type: "Outdoor",
court_description: "Located near the beach, these outdoor courts offer availability on Monday, Wednesday, and Friday. Adjacent to a beach volleyball court and shade structures, players can enjoy a vibrant atmosphere. Reservation is required, with 100% cancellation fees.",
amenities_available: "Beach volleyball court nearby, Shade structures",
court_condition: "Good",
court_regulations: "No smoking or vaping allowed, No food or drinks on court",
court_accesibility: "Stairs access only",
court_scheduling_policy: "Reservation is required. Cancellation fees is 100% of reservation fees.",
img: "public/photos/kees-streefkerk-khFMGeuBy-s-unsplash.jpg",
zip_code: 75035,
reservation_fees: 10,
},
{ court_name: "Downtown Tennis Club",
court: [
  {court_number: "Court 8",
   openslots: 4,
  },
  {court_number: "Court 16",
    openslots: 4,
  }],
court_type: "Outdoor",
court_description: "Positioned in Downtown, these outdoor courts offer availability on Tuesday, Thursday, and Saturday. Restrooms and locker rooms are available for players' convenience. Reservation is required, with 100% cancellation fees.",
amenities_available: "Restrooms available, Locker rooms",
court_condition: "Fair",
court_regulations: "Non-marking shoes required, No food or drinks on court",
court_accesibility: "Wheelchair accessible",
court_scheduling_policy: "Reservation is required. Cancellation fees is 100% of reservation fees.",
img: "public/photos/xavier-teo-Iz34u6goHPE-unsplash.jpg",
zip_code: 75035,
reservation_fees: 9,
cancellation_fees: 9,
}]

module.exports = courts