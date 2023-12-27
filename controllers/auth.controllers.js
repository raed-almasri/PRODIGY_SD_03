import { StatusCodes } from "http-status-codes";

import { v4 as uuidv4 } from "uuid";

import { bcrypt, compare } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import { readFileJson, writeFileJson } from "../utils/fileProcessing.js";
export default {
    /*
     * @auth
     * @public
     * @method POST
     * @work sign up user
     */
    signUp: async (req, res) => {
        try {
            let rawData = await readFileJson("/json/users.json");
            if (
                rawData.find(
                    (element) => element.email.trim() === req.body.email.trim()
                )
            )
                throw new Error("email already found");
            let generatedId = uuidv4();
            rawData.push({
                id: generatedId,
                ...req.body,
                contacts: [],
                password: bcrypt(req.body.password),
            });

            await writeFileJson("/json/users.json", rawData);

            let token = generateToken(
                {
                    userId: generatedId,
                },
                process.env.TOKEN_SECRET_KEY,
                process.env.TOKEN_EXPIRES_IN
            );

            res.status(StatusCodes.CREATED).json({
                success: true,
                data: {
                    token,
                },
            });
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                error: error.message,
            });
        }
    },
    /*
     * @auth
     * @public
     * @method POST
     * @work login
     */
    login: async (req, res) => {
        try {
            let rawData = await readFileJson("/json/users.json");
            let userInfo = rawData.find(
                (element) => element.email === req.body.email.trim()
            );
            if (!userInfo) throw new Error("email is incorrect");

            const validPassword = await compare(
                req.body.password,
                userInfo.password
            );
            if (!validPassword) throw Error("password is incorrect");

            let token = generateToken(
                {
                    userId: userInfo.id,
                },
                process.env.TOKEN_SECRET_KEY,
                process.env.TOKEN_EXPIRES_IN
            );

            res.status(StatusCodes.CREATED).json({
                success: true,
                data: {
                    token,
                },
            });
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                error: error.message,
            });
        }
    },
};
