
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import UserToken from "../models/user-token.js";
const ACCESS_TOKEN_PRIVATE_KEY = process.env['ACCESS_TOKEN_SECRET'] || '';
const REFRESH_TOKEN_PRIVATE_KEY = process.env['REFRESH_TOKEN_SECRET'] || '';
const generateTokens = async (user: User) => {
    try {
        const payload = { id: user.id, roles: user.email };
        const accessToken = jwt.sign(
            payload,
            ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m" }
        );
        const refreshToken = jwt.sign(
            payload,
            REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: "30d" }
        );

        const userToken = await UserToken.findOne({ where: { user_id: user.id }});
        if (userToken) await userToken.destroy();

        await new UserToken({ userId: user.id, token: refreshToken }).save();
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};

export default generateTokens;