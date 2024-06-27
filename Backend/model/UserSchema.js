const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    title: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    position: { type: String },
    company: { type: String },
    businessArena: { type: String },
    employees: { type: Number },

})

const User = mongoose.model('User', UserSchema);

module.exports = User;