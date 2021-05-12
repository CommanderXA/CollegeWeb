module.exports = (req, res, next) => {
    try {
        if (req.session.role != "admin") {
            throw 'Доступ запрещен. Вы не админ.';
        } else {
            next();
        }
    } catch {
        res.status(401).send("Доступ запрещен. Вы не админ.")
    }
};