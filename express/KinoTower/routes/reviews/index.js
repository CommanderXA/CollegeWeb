let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");

module.exports = function(router) {
    router.get("/", auth, (req, res) => {
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

    router.post("/", auth, (req, res) => {
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

    router.get("/:id", auth, (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.put("/:id", auth, (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.patch("/:id", auth, (req, res) => {
        result = {
            "id":"ca80c294-7f46-11eb-9439-0242ac130002",
            "fio":"someText",
            "message":"someText",
            "createdAt":"1615123031303"
        };
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.delete("/:id", auth, (req, res) => {
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
