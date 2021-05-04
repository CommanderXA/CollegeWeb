let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");
let access = require("../../ensureAccess");

// Models
const Rating = require('../../models/Rating');

module.exports = function(router) {
    router.get("/", auth, access, async (req, res) => {
        result = await Rating.find();
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.post("/", auth, async (req, res) => {
        result = await Rating.create(req.body);
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.get("/:id", auth, async (req, res) => {
        result = await Rating.findById(req.params.id);
        res.json(result);
        logger.debug((req.method, Date(), result));
    });

    router.put("/:id", auth, async (req, res) => {
        if (req.session.id == req.body.user) {
            result = await Rating.findByIdAndUpdate(req.params.id, req.body);
            res.json(result);
        } else {
            res.send("Access Denied");
        }
        logger.debug((req.method, Date(), result));
    });

    router.delete("/:id", auth, async (req, res) => {
        if (req.session.id == req.body.user) {
            result = await Rating.findByIdAndDelete(req.params.id, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Deleted : ", docs);
                }
            });
        } else {
            res.send("Access Denied");
        }
        logger.debug((req.method, Date(), result));
    });

    return router;
}
