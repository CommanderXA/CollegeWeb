module.exports = function(router) {
    router.get("/", (req, res) => {
        res.json(
            [
                {
                    "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                    "film":"id",
                    "user":"id",
                    "ball":"5",
                    "createdAt":"1615123031303"
                },
                {
                    "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                    "film":"id",
                    "user":"id",
                    "ball":"5",
                    "createdAt":"1615123031303"
                }
            ]
        )
    });

    router.post("/", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "film":"id",
                "user":"id",
                "ball":"5",
                "createdAt":"1615123031303"
            }
        )
    });

    router.get("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "film":"id",
                "user":"id",
                "ball":"5",
                "createdAt":"1615123031303"
            }
        )
    });

    router.put("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "film":"id",
                "user":"id",
                "ball":"5",
                "createdAt":"1615123031303"
            }
        )
    });

    router.patch("/:id", (req, res) => {
        res.json(
            {
                "id":"ca80c294-7f46-11eb-9439-0242ac130002",
                "film":"id",
                "user":"id",
                "ball":"5",
                "createdAt":"1615123031303"
            }
        )
    });

    router.delete("/:id", (req, res) => {
        res.json("Successfully deleted")
    });

    return router;
}
