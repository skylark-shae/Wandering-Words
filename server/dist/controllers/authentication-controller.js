import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
const JWT_SECRET = process.env["JWT_SECRET"] || "";
export const login = async (req, res) => {
    try {
        let { username, password } = req.body;
        if (!username)
            throw { error: "Username is required" };
        if (!password)
            throw { error: "Password is required" };
        let user = await User.findOne({
            where: {
                username,
            },
        });
        if (!user)
            throw { error: "Invalid email/password" };
        let valid = await compare(password, user.password_hash);
        if (!valid)
            throw { error: "Invalid email/password" };
        let jwtOptions = {
            expiresIn: 30 * 60,
        };
        let access_token = jwt.sign({ id: user.id }, JWT_SECRET, jwtOptions);
        res.header("auth-token", access_token).json({ accessToken: access_token });
    }
    catch (error) {
        console.log(error);
        res.status(403);
        res.send(error);
    }
};
export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await hash(password, 10);
        let user = await User.create({
            username,
            email,
            password_hash: hashedPassword,
        });
        let access_token = jwt.sign({ id: user.id }, JWT_SECRET);
        res.status(200).json({ access_token });
    }
    catch (error) {
        res.status(500).send("Error registering user");
    }
};
