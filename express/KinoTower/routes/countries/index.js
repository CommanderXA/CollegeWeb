const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");
let access = require("../../ensureAccess");

// Models
const Country = require('../../models/Country');

router.get('/', auth, access, async (req, res) => {
    let result = await Country.find();
    res.json(result);
    logger.debug((req.method, Date(), result));
});

module.exports = router;