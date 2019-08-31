let mongoose = require("mongoose");
let { Schema } = mongoose;

let userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
