# Capstone-MST-frontend

MySubTracker frontend, developed using React to provide a responsive, easy to use experience for the users.

Features of MySubTracker: - Login and Create account forms which can be connected to external DB - Profile page to view and edit user information - Dashboard page which includes: Total subscription cost, Pie Chart to display subscription pricing per category, form to add subscriptions - GetStarted steps for new users to help them add their first subscriptions

How to run this application locally:

1: Pull code from Github (front end and backend)

2: In the backend folder run npm install

3: In the frontend folder run npm install

4: In the frontend code using find and replace to replace all axios address from the EC2 url to localhost

4: In the backend folder create .env file

5: In the first line write DB_URI="Your mongoDB uri"

6: In the second line write PORT=8080

7: In the backend folder run npm start

8: In the frontend folder run npm run dev

9: Once frontend and backend are both running you should be able access the application via http://localhost:8080
