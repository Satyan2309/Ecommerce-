const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        minLength: 3,
    },
    email: {
        type: String,
        
    },
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,  // Fixed typo here (was 'conatact' instead of 'contact')
    picture: String,
});
const User = mongoose.model('User', userSchema);

module.exports = User;
