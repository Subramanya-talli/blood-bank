const express = require("express");
const router = express.Router()
const { signup__post } = require("../controller/controller")

router.get('/new-donor', signup__post);


module.exports = router;