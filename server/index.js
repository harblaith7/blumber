const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')
const courseData = require('./data/courses.json')

const app = express()
const cors = require('cors');

app.use(cors());

require('./services/passport')

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate("google"))

///

app.get('/', (req, res) => {
    res.send('This is working currently')
})

app.get('/:user/:courseId', (req, res) => {
    console.log(req.params.courseId)
    console.log('Running')
    res.send(courseData)
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`)
})