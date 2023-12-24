import Joi from "joi";
import Filter from "bad-word-ar";

const filterAr = new Filter("ar");
const filterEn = new Filter("en");
let message =
    "Some fields contain offensive words, please adhere to text etiquette";

export const schema = {
    body: Joi.object({
        name: Joi.string()
            .required()
            .min(2)
            .max(50)
            .trim()
            .custom((value, helpers) => {
                if (filterAr.check(value) || filterEn.check(value))
                    return helpers.message(message);
                else return value;
            }),
        email: Joi.string()
            .trim()
            .required()
            .pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9._]*@gmail\.com$/),
        phone: Joi.string().trim().required(),
    }),
    params: Joi.object({
        id: Joi.string().required().min(2).max(50).trim(),
    }),
    query: {},
};
