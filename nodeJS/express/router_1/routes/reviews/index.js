module.exports = function(router) {
    router.get("/", (req, res) => {
        res.json(
            [
                {
                    "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                    "fio":"someText",
                    "message":"someText",
                    "createdAt":"1615123031303"
                },
                {
                    "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                    "fio":"someText",
                    "message":"someText",
                    "createdAt":"1615123031303"
                }
            ]
        )
    });

    router.post("/", (req, res) => {
        res.json(
            {
                "id": "1",
                "film": "someText", 
                "user": "1",
                "isApproved": "1",
                "deletedAt": "null"
            }
        )
    });

    router.get("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "fio":"someText",
                "message":"someText",
                "createdAt":"1615123031303"
            }
        )
    });

    router.put("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "fio":"someText",
                "message":"someText",
                "createdAt":"1615123031303"
            }
        )
    });

    router.patch("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "fio":"someText",
                "message":"someText",
                "createdAt":"1615123031303"
            }
        )
    });

    router.delete("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "fio":"someText",
                "message":"someText",
                "createdAt":"1615123031303"
            }
        )
    });

    return router;
}
