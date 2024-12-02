import jwt from "jsonwebtoken";
import UserToken from "../models/user-token.js";
const REFRESH_TOKEN_PRIVATE_KEY = process.env['REFRESH_TOKEN_SECRET'] || '';
const verifyRefreshToken = async (refreshToken) => {
    const privateKey = REFRESH_TOKEN_PRIVATE_KEY;
    return new Promise(async (resolve, reject) => {
        const userToken = await UserToken.findOne({ where: { token: refreshToken } });
        if (!userToken) {
            return reject({ error: true, message: "Invalid refresh token" });
        }
        jwt.verify(userToken?.token, privateKey, (err, tokenDetails) => {
            console.log(tokenDetails);
            if (err)
                return reject({ error: true, message: "Invalid refresh token" });
            resolve({
                tokenDetails,
                error: false,
                message: "Valid refresh token",
            });
        });
    });
};
export default verifyRefreshToken;
