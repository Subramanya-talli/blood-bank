const express = require("express");
const router = express.Router()
const { signup__post, becomeDonor } = require("../controller/controller")

router.get('/new-donor/signup', signup__post);
router.get('/new-donor', becomeDonor);


module.exports = router;