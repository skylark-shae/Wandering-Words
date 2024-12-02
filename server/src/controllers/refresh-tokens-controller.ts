import jwt from "jsonwebtoken";

import type { Request, Response } from 'express';
import verifyRefreshToken from '../utils/verifyRefreshToken';
const ACCESS_TOKEN_PRIVATE_KEY = process.env['ACCESS_TOKEN_SECRET'] || '';
 export const getNewAccessToken = (req: Request, res: Response) => {

    verifyRefreshToken(req.body.refreshToken)
        .then(({ tokenDetails }: any) => {
            const payload = { _id: tokenDetails._id, roles: tokenDetails.email };
            const accessToken = jwt.sign(
                payload,
                ACCESS_TOKEN_PRIVATE_KEY,
                { expiresIn: "14m" }
            );
            res.status(200).json({
                error: false,
                accessToken,
                message: "Access token created successfully",
            });
        })
        .catch((err) => res.status(400).json(err));
 }