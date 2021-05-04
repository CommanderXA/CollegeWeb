const express = require('express');
const router = express();
const bcrypt = require("bcrypt");

// Importing Routes
const categoryRoute = require('./categories/index');
const countryRoute = require('./countries/index');
const filmRoute = require('./films/index');
const userRoute = require('./users');

// Importing Models
const User = require("../models/User");

router.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch(e) {
        res.json({ message: e });
    }
    console.log(req.body);
});

router.get('/login', async (req, res) => {
    res.send("Log in");
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            res.json({
                status: 0,
                message: err
            });
        }
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            });
        }
    });
    if (user) {
        result = bcrypt.compareSync(req.body.password, user.password);
        if (result == true) {
            req.session.email = req.body.email;
            req.session.role = user.role;
            req.session.id = user._id;
        }
    }
    res.redirect("/user/" + user._id);
});

router.get('/logout', (req, res) => {
    //req.session.email = ''
    req.session.destroy()
    res.redirect('login');
});

router.use('/user', userRoute);
router.use('/films', filmRoute);
router.use('/categories', categoryRoute);
router.use('/countries', countryRoute);

module.exports = router
