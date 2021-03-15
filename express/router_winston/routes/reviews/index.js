let logger = require("../../logger/logger").logger;

module.exports = function(router) {
    router.get("/", (req, res) => {
        result = [
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
        ];
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.post("/", (req, res) => {
        result = {
            "id": "1",
            "film": "someText", 
            "user": "1",
            "isApproved": "1",
            "deletedAt": "null"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.get("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.put("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.patch("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.delete("/:id", (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    return router;
}
