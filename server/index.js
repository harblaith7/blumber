const express = require('express')
const keys = require('./config/keys')
const courseData = require('./data/courses.json')
const profileRoutes = require('./routes/profile')
const mongoose = require('mongoose')


mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


/*
const mongoose = require('mongoose')

require('./models/User')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
*/


const app = express()

// CORS //
const cors = require('cors');

app.use(cors())
  
require('./services/passport')


// AUTH ROUTES //
require('./routes/authRoutes')(app)

// PROFILE ROUTES //
app.use("/course", profileRoutes)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`)
})














/*
const corsConfig = {
    origin: ["http://localhost:3000"]
  };
app.use(cors(corsConfig));
*/
