const router = require('express').Router({ mergeParams: true });
let logger = require("../logger/logger").logger;
let auth = require("../ensureAuth");

router.get('/', auth, (req, res) => {
    let result = [
        {
            "id": "1",
            "fio": "someText",
            "birthday": "someText",
            "gender": "someText",
            "role": "someText",
            "email": "someText",
            "createdAt": "someDate",
            "deletedAt": "null",
        },
        {
            "id": "1",
            "fio": "someText",
            "birthday": "someText",
            "gender": "someText",
            "role": "someText",
            "email": "someText",
            "createdAt": "someDate",
            "deletedAt": "null",
        },
    ];
    res.json(result);
    logger.debug((req.method, Date(), result));

});

router.get('/:id', auth, (req, res) => {
    result = {
        "id": "1",
        "fio": "someText",
        "birthday": "someText",
        "gender": "someText",
        "role": "someText",
        "email": "someText",
        "createdAt": "someDate",
        "deletedAt": "null",
        "token": "AUTHORIZATION_TOKEN"
    }
    res.json(result)
    logger.debug((req.method, Date(), result));
});

router.put('/:id', auth, (req, res) => {
    result = {
        "id": "1",
        "fio": "someText",
        "birthday": "someText",
        "gender": "someText",
        "role": "someText",
        "email": "someText",
        "createdAt": "someDate",
        "deletedAt": "null",
        "token": "AUTHORIZATION_TOKEN"
    }
    res.json(result)
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', auth, (req, res) => {
    result = {
        "message": "Successfully Deleted"
    }
    res.json(result)
    logger.debug((req.method, Date(), result));
});

module.exports = router;