const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
      clientID : keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        User.findOne({googleId: profile.id})
            .then((existingUser) => {
                if(existingUser){
                    // WE ALREADY HAVE A RECORD WITH PROFILE ID 
                    done(null, existingUser)
                } else {
                    new User({
                        googleId: profile.id,
                        name: profile.name.givenName,
                        fullName: profile.displayName,
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value
                    })
                    .save()
                    .then(user => {
                        done(null, user)
                    })
                }
            })
       
    })
  )
  






/*
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose')

// CREATES AN INSTANCE OF USER (RECORD IN 'user' COLLECTION)
const User = mongoose.model('users')


// SETS IDENTIFYING INFO FROM DONE METHOD TO COOKIE
passport.serializeUser((user,done) => {
    done(null,user.id)
})

// GETS INDENTIFYING INFO COOKIE AND TURNS IT INTO A USER 
passport.deserializeUser((id,done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        
        // CHECKING IF USER ALREADY EXISTS 
        User.findOne({googleId: profile.id})
            .then(existingUser => {
                if(existingUser){
                    // USER ALREADY EXISTS
                    console.log('The user already exists')
                    done(null, existingUser)
                } else {
                    // CREATE NEW USER RECORD 
                    console.log("User doesn't exist, let's create a new one")
                    new User({
                        googleId: profile.id,
                        name: profile.name.givenName,
                        fullName: profile.displayName,
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value
                    })
                    .save()
                    .then(user => done(null, user))
                }
            })
        }
    ) 
)


*/