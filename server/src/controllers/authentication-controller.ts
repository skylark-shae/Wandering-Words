import { compare, hash } from 'bcrypt';
import type { Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import generateTokens from '../utils/generateTokens.js';
import UserToken from '../models/user-token.js';
import verifyRefreshToken from '../utils/verifyRefreshToken.js';

const JWT_SECRET = process.env['ACCESS_TOKEN_SECRET'] || '';

export const login = async (req: Request, res: Response) => {
    try {
        let {username, password} = req.body
        if(!username) throw {error : "Username is required"}
        if(!password) throw {error : "Password is required"}
        let user = await User.findOne({
            where : {
                username
            }
        })
        if(!user) throw {error : "Invalid email/password"}
        let valid = await compare(password, user.password_hash)
        if(!valid) throw {error : "Invalid email/password"}

        const { accessToken, refreshToken } = await generateTokens(user);

        res.status(200).header('Bearer', accessToken).json({accessToken, refreshToken})

    } catch (error) {
        console.log(error)
        res.status(403)
        res.send(error)
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await hash(password, 10);
        let user = await User.create({
            username,
            email,
            password_hash: hashedPassword
        });
        let access_token = jwt.sign({id : user.id}, JWT_SECRET)
        res.status(200).json({access_token});
      } catch (error) {
        console.log(error)
        res.status(500).send('Error registering user');
      }
}

export const getNewAccessToken = async (req: Request, res: Response) => {
    if (!req.body.refreshToken) {
        return res.status(500).json({error: true, message: 'missing refreshToken in body'});
    }
    console.log('shouldnt be working')
    const { tokenDetails } = await verifyRefreshToken(req.body.refreshToken);
    const payload = { _id: tokenDetails._id, email: tokenDetails.email};
    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '14m'});
    return res.status(200).json({error: false, accessToken, message: 'Access token created successfully'})
}

export const logout = async (req: Request, res: Response) => {
    try {
        const userToken = await UserToken.findOne({ where: {token: req.body.refreshToken}});
        if(!userToken) {
            return res.status(200).json({
                error: false,
                message: 'Logged otu success!'
            });
        }

        await userToken.destroy();
        return res.status(200).json({ error: false, message: "Logged Out Sucessfully" });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: true, message: "Internal Server Error" })
    }
} 
