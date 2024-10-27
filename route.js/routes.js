const express = require("express");
const router = express.Router()
const { signup__get } = require("../controller/controller")

router.get('/new-donor', signup__get);