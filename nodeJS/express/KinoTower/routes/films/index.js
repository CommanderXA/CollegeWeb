const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");
let access = require("../../ensureAccess");

// Models
const Film = require('../../models/Film');

router.get('/', auth, async (req, res) => {
    result = await Film.find();
    res.json(result)
    logger.debug((req.method, Date(), result));
});

router.get('/:id', auth, async (req, res) => {
    result = await Film.findById(req.params.id);
    res.json(result)
    logger.debug((req.method, Date(), result));
});

router.post('/', auth, access, async (req, res) => {
    result = await Film.create(req.body);
    res.json(result)
    logger.debug((req.method, Date(), result));
    logger.debug((req.method, Date(), result));
});

router.put('/:id', auth, access, async (req, res) => {
    result = await Film.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', auth, async (req, res) => {
    result = await Film.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.use('/:id/reviews', require("../reviews/index")(router));
router.use('/:id/rating', require("../rating/index")(router));

module.exports = router;
