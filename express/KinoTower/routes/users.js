const router = require('express').Router({ mergeParams: true });
let logger = require("../logger/logger").logger;
let auth = require("../ensureAuth");
let access = require("../ensureAccess");

// Importing Models
const User = require("../models/User");

router.get('/', auth, access, async (req, res) => {
    let result = await User.find();
    res.json(result);
    logger.debug((req.method, Date(), result));

});

router.get('/:id', auth, async (req, res) => {
    if (req.session.role == "admin" || req.params.id == req.session.id) {
        result = await User.findById(req.params.id);
        res.json(result)
    } else {
        res.send("Access Denied");
    }
    logger.debug((req.method, Date(), result));
});

router.put('/:id', auth, async (req, res) => {
    if (req.params.id == req.session.id) {
        user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.json(user)
    } else {
        res.send("Access Denied");
    }
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', auth, access, async (req, res) => {
    user = await User.findByIdAndDelete(req.params.id);
    res.send("Deleted");
    logger.debug((req.method, Date(), result));
});

module.exports = router;