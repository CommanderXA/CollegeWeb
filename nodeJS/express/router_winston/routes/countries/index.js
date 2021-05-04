const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");

router.get('/', auth, (req, res) => {
    let result = [
        {
            "id": "1",
            "name": "someText"
        },
        {
            "id": "2",
            "name": "someText"
        },
    ];
    res.json(result);
    logger.debug((req.method, Date(), result));
});

module.exports = router;