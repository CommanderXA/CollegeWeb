const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;

router.get('/', (req, res) => {
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