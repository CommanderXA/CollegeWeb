let logger = require("../../logger/logger").logger;

module.exports = function(router) {
    router.get("/", (req, res) => {
        result = [
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
        ];
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.post("/", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "film":"id",
            "user":"id",
            "ball":"5",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.get("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "film":"id",
            "user":"id",
            "ball":"5",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.put("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "film":"id",
            "user":"id",
            "ball":"5",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.patch("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "film":"id",
            "user":"id",
            "ball":"5",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.delete("/:id", (req, res) => {
        result = {
            "message": "Successfully deleted"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    return router;
}
