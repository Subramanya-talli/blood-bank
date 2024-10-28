const Donor = require("../model/donor");

async function signup__post(req, res) {
    const { name, bloodGroup, city, contactNumber, email, password } = req.body;
    try {
        const donor =new Donor({
            name, 
            bloodGroup, 
            city, 
            contactNumber, 
            email, 
            password
        });
        await donor.save();
        res.status(201).json(donor);
    } catch (error) {
        res.status(400).send("Error user not created");
    }
}

function signup__get(req, res)
{
    const { email, password} = req.body;
    try {
        if (email && password) {
            
        }
    } catch (error) {
        
    }
}



module.exports = {
    signup__post
}