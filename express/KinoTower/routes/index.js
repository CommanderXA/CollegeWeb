const express = require('express');
const router = express();

// Importing Routes
const categoryRoute = require('./categories/index');
const countryRoute = require('./countries/index');
const filmRoute = require('./films/index');
const userRoute = require('./users');

router.use('/signup', (req, res) => {
    res.json({
        "id": "id",
        "fio": "someText", 
        "birthday": "someText",
        "gender": "someText",
        "role": "someText", 
        "email": "someText",
        "createdAt": "someDate",
        "deletedAt": "someDate",
        "token": "AUTHORIZATION_TOKEN"
    })
})

router.use('/login', (req, res) => {
    user = {
        fio: "someText", 
        role: "someText", 
        email: "email@e.e",
        token: "AUTHORIZATION_TOKEN"
    };
    req.session.email = user.email;
    console.log(req.session);
    res.send("Logged in");
})

router.use('/user', userRoute);
router.use('/films', filmRoute);
router.use('/categories', categoryRoute);
router.use('/countries', countryRoute);

module.exports = router
