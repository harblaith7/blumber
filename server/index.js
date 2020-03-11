const express = require('express')
const courseData = require('./data/courses.json')

const app = express()

app.get('/', (req, res) => {
    res.send('This is working currently')
})

app.get('/:user/:courseId', (req, res) => {
    console.log(req.params.courseId)
    console.log('Running')
    res.send('asd')
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`)
})