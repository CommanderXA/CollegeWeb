module.exports = (req, res, next) => {
    try {
        if (req.session.role != "admin") {
            throw 'Access Denied';
        } else {
            next();
        }
    } catch {
        res.status(401).send("Access Denied")
    }
};