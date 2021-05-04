const router = require('express').Router({mergeParams: true});
let logger = require("../../logger/logger").logger;
let auth = require("../../ensureAuth");
let access = require("../../ensureAccess");

// Models
const Category = require('../../models/Category');

router.get('/', auth, access, async (req, res) => {
    let result = await Category.find();
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.get('/:id', auth, access, async (req, res) => {
    let result = await Category.findById(req.params.id);
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.post('/', auth, access, async (req, res) => {
    let result = await Category.create(req.body);
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.put('/:id', auth, access, async (req, res) => {
    let result = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
    logger.debug((req.method, Date(), result));
});

router.delete('/:id', auth, access, async (req, res) => {
    let result = await Category.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
    res.json(result)
    logger.debug((req.method, Date(), result));
});

module.exports = router;