const router = require('express').Router({mergeParams: true});

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
});

router.get('/:id', (req, res) => {
    res.json({
            "id": "1",
            "name": "someText", 
            "parent": "1",
            "deletedAt": "null"
        },
    )
});

router.post('/', (req, res) => {
    res.json({
        "id": "1",
        "name": "someText", 
        "parent": "1",
        "deletedAt": "null"
    })
});

router.put('/:id', (req, res) => {
    res.json({
            "id": "1",
            "name": "someText", 
            "parent": "1",
            "deletedAt": "null"
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