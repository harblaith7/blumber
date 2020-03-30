# Blumber

### Table of Content
* About the Project
* Technology Stack
* How it was Built
* Improvements


### About the project 
This project tackles the problem many university students face when taking challenging classes. Sometimes going to class, attentively listening to the professor, taking diligent notes, and reading the textbook from cover to cover just isn't enough for you to grasp the necessary concepts. Due to this, many students resort to paying for tutors who have previously taken the class. I believe that this is a great, but pricey option. Blumber aims to solve this problem by providing university students with supplementary online video lectures, notes, and practice problems created by a previous student who excelled in the respective class. This way, students can better grasp the concepts of their university class without wasting time studying unnecessary details.

This project has been on my mind ever since the end of my 2nd year at Queens' University (2.5 years ago). However, at the time, I didn't have the technical skills to build the application. When I finally developed those skills, I decided it was time to make Blumber a real application. Currently, the website is not deployed, but below is a link of a video demo of the website.

[Video demo of Blumber](https://www.loom.com/share/c70d719d06684cabb217645cdaf173ab)

### Technology Stack 
This web application was built using the following tools:
* HTML
* SCSS
* JavaScript
* React
* Redux
* Node
* Express
* Stripe
* Passport
* MongoDB
* Mongoose

### How it was Built

#### OAuth
I began this project by setting up authentication in the back-end. To accomplish this, I utilized Passport.js, along with the Google and Facebook strategy to create a functional "Sign in with Google" and "Sign in with Facebook" buttons. The diagram below explains the steps I took to set this up.

![OAuth flow](https://user-images.githubusercontent.com/35265876/77967754-c818c380-72b3-11ea-9b2f-020c535962ee.png)

#### Front-end
I then moved on to the front-end where I built many pages using HTML, SCSS, JavaScript, React and Redux. Redux was used to centralize the authentication state to all children components in the App.js. This allowed me to render the same component, but with different JSX elements depending on the user's log status. React Router was also utilize for page to page navigation. When users clicked on specific courses, an axios call was made to the back-end server to fetch the course data.

#### Back-end
The course data was stored in a JSON file. Upon a request, the server filtered through the data and return an array of the appropriate course data to the front-end.

### Improvements
This was my first real project and I am very proud of it. However, there are still alot of improvements I would like to make. Below is a list of all the things I would like to change in the future: 
* Set up app for production
* Move all course data to database (MySQL or MongoDB)
* Link User model to Course Model
* Add tests with "react-testing-library" or Jest
