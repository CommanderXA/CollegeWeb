const router = require('express').Router({mergeParams: true});
let logger = require("../logger/logger").logger;

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    result = {
        "message": "Successfully Deleted"
    }
    res.json(result)
    logger.debug((req.method, Date(), result));
});

module.exports = router;