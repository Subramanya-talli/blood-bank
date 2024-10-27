const Donor = require("../model/donor");

async function signup__get(req, res) {
    const {name, bloodGroup, city, contactNumber, email, password} = req.body;
    try {
        const donor = Donor.create({
            name, 
            bloodGroup, 
            city, 
            contactNumber, 
            email, 
            password
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send("Error user not created");
    }
}



module.exports = {
    signup__get
}