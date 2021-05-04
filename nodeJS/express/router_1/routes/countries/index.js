const router = require('express').Router({mergeParams: true});

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
});

module.exports = router;