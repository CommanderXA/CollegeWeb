const router = require('express').Router({mergeParams: true});

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
});

router.get('/:id', (req, res) => {
    res.json({
            "id": "1",
            "fio": "someText", 
            "birthday": "someText",
            "gender": "someText",
            "role": "someText", 
            "email": "someText",
            "createdAt": "someDate",
            "deletedAt": "null",
            "token": "AUTHORIZATION_TOKEN"
        },
    )
});

router.put('/:id', (req, res) => {
    res.json({
            "id": "1",
            "fio": "someText", 
            "birthday": "someText",
            "gender": "someText",
            "role": "someText", 
            "email": "someText",
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

module.exports = router;