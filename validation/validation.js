import { StatusCodes } from "http-status-codes";

import { enumTypeInput as type } from "../utils/enums.js";

export const validate = (schema, typeSchema) => {
    let result = false;
    return (req, res, next) => {
        // console.log(req.body);
        switch (typeSchema) {
            case type.body:
                result = schema.validate(req.body);
                break;

            case type.query:
                result = schema.validate(req.query);
                break;

            case type.params:
                result = schema.validate(req.params);
                break;
        }
        //check if error
        if (result.error) {
            const { details } = result.error;
            const message = details.map((i) => i.message).join(" , ");
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: message,
            });
        }
        next();
    };
};
