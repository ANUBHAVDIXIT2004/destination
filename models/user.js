const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportlocalMongoose = require("passport-local-mongoose");//automatically define username password and hash it

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },

});

userSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model("User",userSchema);