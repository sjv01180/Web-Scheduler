import express from 'express';
const app = express();
const port = 3000;

/* development plan for scheduler backend (AKA: how to proceed with backend development through documented high-level modeling)

  - There will be ONE "calendar" object that MANY appointments will be stored in and will reference
  - An "Appointment" will contain a name, a unique username (JWT?), a phone number, a starting time, and an ending time (focus on "start time + xyz minutes" for now).
  - There should be some sort of time validation procedure prior to inserting an appointment into the calendar (can be done through clever DB readings or delegated to frontend)
  - Two type of accounts: "User" and "Business":
    - User: can schedule/cancel an appointment in the calendar. They can only manipulate appointments owned by them, and any other appointments can only be seen (frontend might tackle most of this)
    - Business: technically the "Admin" of the entire calendar. Possesses ownership to ALL appointments and can "create" unavailable timeblocks (treated as an appointment scheduled by the owner)
    - TWO SEPERATE CRUD APIS: USERS WILL HAVE THEIR AUTH TOKEN ADDED TO EACH API REQUEST, WHILE THE BUSINESS ACCOUNT WILL MANIPULATE CALENDAR WILLY-NILLY
  
  IMPORTANT TOOLS TO CONSIDER:
  * Figma/other modeling tools: create diagrams that explains relationship within objects and system components
  * JSON Web Token: user authenthication
  * MongoDB: NoSQL DataBase that stores things as JSON documents (objects). Great way to get familiarized with NoSQL libraries for nodejs
  * Mongoose: ORM for MongoDB. We can create schemas for appointments in a calendar (for now, treat calendar as an entire table)
  
  POTENTIAL EXTENSIONS TO PROJECT:
  * As of now, we can only view availability for a single day. Extend the schema of our backend to support scheduling up to five work days into the future
  * utilize an email API to notify users about their appointment statuses
  * add Business-end features to modify duration of appointments and availability of calendars (can only schedule between x and y)
  * dynamic ending time for appointments for users to choose from (between 30-mins and 1 hour)
*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});