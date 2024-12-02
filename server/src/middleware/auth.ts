import type {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env['ACCESS_TOKEN_SECRET'] || '';

export default (req: Request, res: Response, next: NextFunction): any => {
  const token = req.header("Bearer");
  console.log(token)
  if (!token) return res.status(401).json({ message: "Authentication Failed" });
    try {
      const val = jwt.verify(token, JWT_SECRET);
      req.body.user = val;
      next()
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "Token Invalid" });
    }
};