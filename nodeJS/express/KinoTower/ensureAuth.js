module.exports = (req, res, next) => {
    try {
        if (!req.session.email) {
            throw 'Not logged in';
        } else {
            next();
        }
    } catch {
        res.status(401).send("Not logged in")
    }
};
