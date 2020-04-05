const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema({
    googleId: String,
    name: String,
    fullName: String,
    email: String,
    photo: String,
})


mongoose.model('users', userSchema)


/*
const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    googleId: String,
    name: String,
    fullName: String,
    email: String,
    photo: String
})

mongoose.model('users', userSchema)


*/

