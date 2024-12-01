import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env['JWT_SECRET'] || '';
export default (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(401).json({ message: "Authentication Failed" });
    try {
        const val = jwt.verify(token, JWT_SECRET);
        req.body.user = val;
        next();
    }
    catch (e) {
        console.error(e);
        return res.status(500).send({ message: "Token Invalid" });
    }
};
