const express = require('express')
const keys = require('./config/keys')
const courseData = require('./data/courses.json')

const app = express()

// CORS //
const cors = require('cors');

/*
const corsConfig = {
    origin: ["http://localhost:3000"]
  };
app.use(cors(corsConfig));
*/

app.use(cors())
  
require('./services/passport')


// AUTH ROUTES //
require('./routes/authRoutes')(app)

// OTHER ROUTES //
app.get('/', (req, res) => {
    res.send('This is working currently')
})

app.get('/course/:user/:courseId', (req, res) => {
    
    const found = courseData.some(course => course.courseId === req.params.courseId)

    if(found){
        res.json(courseData.filter(course => course.courseId === req.params.courseId))
    } else {
        res.status(400).json({msg: `No course with the id of ${req.params.courseId}`})
    }
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`)
})