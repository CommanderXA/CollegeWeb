const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;

router.get('/', (req, res) => {
    let result = [
        {
            "id": "1",
            "name": "someText", 
            "country": "someText",
            "duration": "someText",
            "yearOfIssue": "someText", 
            "age": "someText",
            "categories": "[]",
            "linkImg": "someText",
            "linkKinopoisk": "someText",
            "linkVideo": "someText",
            "createdAt": "someDate",
            "deletedAt": "null",
        },
        {
            "id": "2",
            "name": "someText", 
            "country": "someText",
            "duration": "someText",
            "yearOfIssue": "someText", 
            "age": "someText",
            "categories": "[]",
            "linkImg": "someText",
            "linkKinopoisk": "someText",
            "linkVideo": "someText",
            "createdAt": "someDate",
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
        "country": "someText",
        "duration": "someText",
        "yearOfIssue": "someText", 
        "age": "someText",
        "categories": "[]",
        "linkImg": "someText",
        "linkKinopoisk": "someText",
        "linkVideo": "someText",
        "createdAt": "someDate",
        "deletedAt": "null",
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.post('/', (req, res) => {
    result = {
        "id": "1",
        "name": "someText", 
        "country": "someText",
        "duration": "someText",
        "yearOfIssue": "someText", 
        "age": "someText",
        "categories": "[]",
        "linkImg": "someText",
        "linkKinopoisk": "someText",
        "linkVideo": "someText",
        "createdAt": "someDate",
        "deletedAt": "null",
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.put('/:id', (req, res) => {
    result = {
        "id": "1",
        "name": "someText", 
        "country": "someText",
        "duration": "someText",
        "yearOfIssue": "someText", 
        "age": "someText",
        "categories": "[]",
        "linkImg": "someText",
        "linkKinopoisk": "someText",
        "linkVideo": "someText",
        "createdAt": "someDate",
        "deletedAt": "null",
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', (req, res) => {
    result = {
        "message": "Successfully Deleted"
    };
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.use('/:id/reviews', require("../reviews/index")(router));
router.use('/:id/rating', require("../rating/index")(router));

module.exports = router;
