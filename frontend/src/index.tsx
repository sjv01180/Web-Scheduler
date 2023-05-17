import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<h1>Hello React!</h1>)

/* development plan for scheduler frontend (AKA: how to proceed with frontend development through minor visual suggestions)
    - scheduling page must be structured as a table (for now: one column with multiple rows representing hours in a day, partitioning every 30 minutes)
    - alter table by existing appointments (scheduled appointments should be "greyed out" to indicate lack of availability)
    - when a user clicks on an available time block, a pop-up should appear that allows the user to add a name and their phone number. 
    - users should see their scheduled appointments on the page. Each appointments should contain an "x" button to cancel them.
    - cancelling an appointment requires an alert box to confirm the deletion

    - user authenthication content should be self-explanitory

    potential extensions:
    - scheduling page should have multiple columns representing a calendar week
    - things should be done in one page. If possible, prevent frontend from refreshing itself after scheduling
*/