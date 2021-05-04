let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");

module.exports = function(router) {
    router.get("/", auth, (req, res) => {
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

    router.post("/", auth, (req, res) => {
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

    router.get("/:id", auth, (req, res) => {
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

    router.put("/:id", auth, (req, res) => {
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

    router.patch("/:id", auth, (req, res) => {
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

    router.delete("/:id", auth, (req, res) => {
        result = {
            "message": "Successfully deleted"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    return router;
}
