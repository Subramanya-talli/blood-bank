const mongoose = require("mongoose");
const { isEmail } = require("validator")

const donorSchema = mongoose.Schema({
    name:{
        
        type :String,
        required: [true, "Please enter an email"],
    },
    bloodgroup:{
        
        type: String,
        required: [true, "Please enter your blood group"],
    
    },
    city:{
        
        type: String,
        required: [true, "Please enter your city"],

    },
    contactnumber:{
        type: Number,
        required: [true, "Please enter your contact number"]

    },
    email:{
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowerCase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password:
    {
        type: String,
        required: [true, "Please enter an password"],
        minlength: [8, "Minimum password length is 8 charcters"]
    },},
{
    timestamps: true
});

const Donor = mongoose.model("donor", donorSchema);

module.exports = Donor;
