const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;

router.get('/', (req, res) => {
    let result = [
        {
            "id": "1",
            "name": "someText", 
            "parent": "1",
            "deletedAt": "null",
        },
        {
            "id": "2",
            "name": "someText", 
            "parent": "2",
            "deletedAt": "null",
        }
    ];
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.get('/:id', (req, res) => {
    result = {
        "id": "1",
        "name": "someText", 
        "parent": "1",
        "deletedAt": "null"
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.post('/', (req, res) => {
    result = {
        "id": "1",
        "name": "someText", 
        "parent": "1",
        "deletedAt": "null"
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.put('/:id', (req, res) => {
    result = {
        "id": "1",
        "name": "someText", 
        "parent": "1",
        "deletedAt": "null"
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', (req, res) => {
    result = {
        "message": "Successfully Deleted"
    }
    res.json(result)
    logger.debug((req.method, Date(), result));
});

module.exports = router;