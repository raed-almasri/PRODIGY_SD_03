import Jwt from "jsonwebtoken";
export let verifyToken = (token, SECRET_KEY) => Jwt.verify(token, SECRET_KEY);

export let generateToken = (payload, SECRET_KEY, expiresIn) =>
    Jwt.sign(
        {
            ...payload,
        },
        SECRET_KEY,
        {
            expiresIn,
        }
    );
export let createQROffer = (payload) =>
    Jwt.sign(
        {
            ...payload,
            startTime: new Date(),
        },
        process.env.SECRET_KEY_OFFER,
        {
            expiresIn: "2d",
        }
    );
export let verifyQROffer = (payload) =>
    Jwt.verify(payload, process.env.SECRET_KEY_OFFER);
