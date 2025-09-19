I want to create a web application to manage an employee shuttle route. The website should include the following features:

1. Users and Roles:
   - Secretary: Can add, edit, or delete a passenger.
   - Driver: Can view only the daily route, including one-time exceptions, without the ability to edit data.

2. Database:
   - Passengers:
     - Name
     - Phone number
     - Station address / GPS location
     - Regular travel days (e.g., Sunday, Tuesday, Friday)
   - Exceptions (one-time changes):
     - Passenger ID
     - Date of the exception
     - Status: present / absent

3. Website Functions:
   - Secretary:
     - Add new passengers.
     - Edit passenger details and regular travel days.
     - Mark a one-time exception (e.g., "not coming tomorrow") without changing the regular travel days.
   - Driver:
     - Opens the website in the morning and sees the route for today.
     - The system calculates who is supposed to travel today based on regular days, and removes anyone marked as absent in exceptions.
     - Displays the total number of passengers and shows their stations on a map (e.g., Google Maps) with a line connecting the stations in order.

4. Additional Requirements:
   - The information must be accurate in real-time – any change by the secretary must immediately reflect for the driver.
   - No separate mobile app is required – only a website.
   - Preferred technologies: React (Frontend), Node.js + Express (Backend), MongoDB or Firebase (Database).
   - The interface should be simple and suitable for internal use only (not commercial).

Summary:
Create a web application where the secretary manages passengers and exceptions, and the driver sees the accurate daily route including exceptions, with real-time updates. Please also provide example code for the Frontend, Backend, and Database connection.
