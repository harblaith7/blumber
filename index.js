const express = require('express')
const cors = require('cors');
const profileRoutes = require('./routes/profile')
const keys = require("./config/keys")
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI, {
   useUnifiedTopology: true,
   useNewUrlParser: true
})

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60* 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)


// MIDDLEWARE 
app.use(cors())



app.use("/api", profileRoutes)


const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV === "production"){

  app.use(express.static("client/build"))

  const path = require("path")
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
  
}

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})



/*

const express = require('express')
const keys = require('./config/keys')
const profileRoutes = require('./routes/profile')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

// TELLS EXPRESS TO SETUP COOKIES
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt 
    keys: [keys.cookieKey]
  })
)

// TELL PASSPORT TO USE COOKIE TO HANDLE AUTHENTICATION
app.use(passport.initialize())
app.use(passport.session())

// CORS //
const cors = require('cors');
app.use(cors())

// AUTH ROUTES //
require('./routes/authRoutes')(app)

// PROFILE ROUTES //
app.use("/course", profileRoutes)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Now listening at PORT ${PORT}`)
})


*/













/*
const corsConfig = {
    origin: ["http://localhost:3000"]
  };
app.use(cors(corsConfig));
*/
