const courseData = require('../data/courses.json')
const router = require('express').Router()

// GET COURSE ON CLICK OF PURCHASED COURSES //
router.get('/:user/:courseId', (req, res) => {
    const found = courseData.some(course => course.courseId === req.params.courseId)

    if(found){
        res.json(courseData.filter(course => course.courseId === req.params.courseId))
    } else {
        res.status(400).json({msg: `No course with the id of ${req.params.courseId}`})
    }
})

// FETCHES ALL PURCHASED COURSES //
router.get('/purchased', (req, res) => {
    console.log('called')
    res.json(courseData.filter(course => course.purchased === true))
})



module.exports = router