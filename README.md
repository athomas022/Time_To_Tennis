# Unit 2 Project - Time to Tennis
Access this app on [Heroku](https://general-assemby-time-to-tennis-4e548f76d88c.herokuapp.com)

## Technologies Used
Node.js, EJS, Express, MangoDB

## Installation Instructions
Access this app on [Heroku](https://general-assemby-time-to-tennis-4e548f76d88c.herokuapp.com)

## User Stories
- As a tennis enthusiast, I want to be to access the landing page of the "Time to Tennis" app on a web-browser and be able to understand the different features of the app.
- As a tennis enthusiast, I want to be to access the landing page of the "Time to Tennis" app on a mobile phone and be able to access the different features of the app.
- As a tennis enthusiast, I want to be able to easily navigate to the different features of the web and mobile app.
- As a tennis enthusiast, I want to be able to register myself with the app and to be authenticated every time I want to use the features and save my preferences and previous selections.
- As a tennis enthusiast, I want to i) search a selected zip code for groups of fellow enthusiasts, ii) join groups and iii) leave groups.
- As a tennis enthusiast, I want to i) search a zip code for courts and reserve them, ii) book them and iii) cancel reservations.
- As a tennis enthusiast, I want to i) search for events within the groups/zip codes, ii) RSVP for these events, iii) cancel my RSVP for these events.
- As a group admin, I want to i) create groups, ii) edit groups and iii) disband groups.
- As a group admin, I want to i) create events, ii) edit events and iii) cancel events.
- As a group admin, I want to i) add members to my groups, ii) edit member details and iii) remove members.
- As a website admin, I want to i) add courts, ii) edit court details and iii) remove courts.
- As a tennis enthusiast, I want to be able to view my activity (i.e., which groups I joined, which events I have upcoming)

## Wireframes
**Purpose**: Design and build a web-based and mobile app that connects tennis enthusiasts in zip codes with their fell tennis enthusiasts and create a space where they can come together to share their love for tennis.
**Scope**:  Build an app that allows tennis enthusiasts to join and create tennis groups in a zip code, to reserve courts to play tennis and to create and join tennis events in a zip code.
> This is the Index page which shows the app features, the nav bar to go to the sign up page, the search button which is a drop down menu. Prior to log in if the features are selected, the user will be routed to sign up/login page.
![image](https://media.git.generalassemb.ly/user/51651/files/642a63a3-06d0-412f-a738-de0bc6494556)
> This is the login in page.
![image](https://media.git.generalassemb.ly/user/51651/files/7dc27d1e-62c0-46f8-bec4-59c0661b4d05)
>This are the pages to reserve courts. Clicking into the reserve button for Court 1 etc. will open up a calendar view for available slots that the user will be able to select.
![image](https://media.git.generalassemb.ly/user/51651/files/c388748c-c438-497a-9099-5c79a7eb659d)
![image](https://media.git.generalassemb.ly/user/51651/files/d88e2c04-c2b7-4687-ac2d-b32918853507)

>This is the groups page with links to the individual groups. On the individual pages, the users can navigate to the events of the group and the member directory.
![image](https://media.git.generalassemb.ly/user/51651/files/97e63e0a-efeb-4514-935d-d01a4ebf3679)
![image](https://media.git.generalassemb.ly/user/51651/files/e796bf0c-a905-49a0-8d89-0ed509f35c7d)
![image](https://media.git.generalassemb.ly/user/51651/files/afaadc0b-ff39-4535-8a56-47bb1b597b01)

>This is the events page with links to the individual events. Selecting the timeslot will redirect user to the a page to reserve an available spot
![image](https://media.git.generalassemb.ly/user/51651/files/c9be3dbc-799c-4c49-82c3-42562322e6f8)
![image](https://media.git.generalassemb.ly/user/51651/files/fdbde448-f316-4506-a50e-4f69b7641bd5)

>This is the My Activity page.
![image](https://media.git.generalassemb.ly/user/51651/files/3dcb05e2-a682-4f9a-804b-47714f8c3dbe)

>This is an example of a new page to create a new group. Group admins will be able to navigate to this from the index page.
![image](https://media.git.generalassemb.ly/user/51651/files/0d3efaf0-95e5-4db2-a1f7-7858f5be4e5f)

>This is an example of a edit page to edit the details of an existing event. Group admins will be able to navigate to 
this from their group > events > Women's singles match view.
![image](https://media.git.generalassemb.ly/user/51651/files/9e97e39f-d923-4ab1-98fd-0e6edc0867d7)


## Approach taken: Utilized the MVC setup with the 7 restful routes
1. Nagivation (Views):
Utilized the following views to navigate between the pages:
- Home page: this is the landing page
- Courts pages: Index page and show page to 1) see all the courts and 2) click into the individual court pages to further view details and reserve the court.
- Members pages: Edit, new and show pages to edit exisiting members via a form, create new members via a form and display to the memebers their relevant information.
- Event pages: Index, Edit, New, Register and Show to display all the events created, click in to the individual events, create new events, edit or delete the events (depending on your authorization) and register members to the events 
- Groups: Index, Edit, New, Join and Show to display all the groups, click into each groups to view more details and join the group. Users can also create, edit and delete the group.

3. Schemas built (Models):
   Built the following schemas (for MangoDb) for the user interaction etc.:
   - Courts (seeded a few courts)
   - Events
   - Members
   - Groups
     
4. Association using the MangoDB object ID to achieve the relationships detailed below:
   The ERD is: ![image](https://media.git.generalassemb.ly/user/51651/files/13ef1a62-9bc3-4f81-b1b6-d9dec9cb6120) 
5. The user is authenticated for every route that is hit and logs info about the currentMember.
6. Utilize all the 7 restful routes (controller) to navigate pages and query and retrieve MangoDb.

## Unsolved Problems / Major Hurdles:
### Major Hurdles:
1. Routes for joining a group and registering for an event (edit and update route)
2. Handling the output format of the associated MangoDB objects in views/forms.

### Unresolved Problems/Goals:
1. Did not deploy the code to search and reserve the courts in this version.
2. Did not deploy the code to leave both groups and events in this version.
3. CSS setup does not lend to the best visual experience for the user.
4. Didn't not bring in an API to assist with the filtering of the groups, courts and events.
5. In this version, there are not different access groups, i.e., while group admins were added to the schema, for this version, members added themselves to the groups; there are no website admins either.


### Unresolved Stretch Goals:
1. Expand the number of zip codes, groups, members, events and courts.
2. Create a quiz to match to the members to their most likely groups.
3. Implement access roles by the different access groups: e.g., website admin, group admin, member.
4. Allow groups to create and manage tournaments across zip codes.
5. Link to a facebook group and/or bring in a discussion forum for each group.
6. Create a show page to lookup trainers, book/reserve classes with trainers and review trainers.
7. Introduce multiple membership tiers: Tier 1 to just browse and join groups and reserve courts and Tier 2 to everything Tier 1 can do but have waived fees in tournaments and 15% off on trainers.
8. Create a quiz to match to a trainer.
9. Create a link to shop for tennis merchandise.
10. Introduce additional validations (e.g., one member can't be at multiple courts during one timeslot)
11. Enhance the user experience of app with enhanced design, graphics and videos.
12. More enhanced validations to be implemented.

## References
1. Reviewed the documentation on [MDN documents](https://www.w3schools.com/howto/howto_css_center-vertical.asp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all))
2. Images from [Unsplash](https://unsplash.com/).
3. Debugging with General Assembly tutors and with ChatGpt.
4. Utilized Chatgpt for the nav CSS build.
