
const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
    c:{
        type :String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
    },
    password:
    {
        type: String,
        required: true,
    },},
{
    timestamps: true
});

const Donor = mongoose.model("donor", donorSchema);

module.exports = Donor;
