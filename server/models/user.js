const mongoose = require('mongoose');

const User = mongoose.model('user',{
    email:{
        type: String,
        minlength:1,
        required:true,
        trim: true
    }
})