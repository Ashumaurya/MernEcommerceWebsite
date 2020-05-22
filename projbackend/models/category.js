const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    category : {
        type : String ,
        required : true ,
        trim : true,
        maxlength : 32 ,
        unique : true 
    }

},{timestamps : true});

module.exports = mongoose.model("Category",categorySchema);