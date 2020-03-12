
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose')

// CREATES AN INSTANCE OF USER (RECORD IN 'user' COLLECTION)
//const User = mongoose.model('users')


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile)
    }
  ) 
)