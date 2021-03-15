const router = require('express').Router({mergeParams: true});

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
});

router.get('/:id', (req, res) => {
    res.json({
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
    )
});

router.post('/', (req, res) => {
    res.json({
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
    )
});

router.put('/:id', (req, res) => {
    res.json({
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
    )
});

router.delete('/:id', (req, res) => {
    res.json(
        {
            "message": "Successfully Deleted"
        },
    )
});

router.use('/:id/reviews', require("../reviews/index")(router));
router.use('/:id/rating', require("../rating/index")(router));


module.exports = router;
