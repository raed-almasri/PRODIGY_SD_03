import { validate } from "../validation/validation.js";
import { enumTypeInput } from "../utils/enums.js";
import { auth } from "../middleware/auth.js";
import fsExtra from "fs-extra";

const execute = (fun) => (req, res, next) => {
    Promise.resolve(fun(req, res, next)).catch(async (error) => {
        console.log(error);

        if (req.file && (await fsExtra.pathExists(req.file.path))) {
            // console.log("access to error handel here ...", 0);
            try {
                await removePic(req.file.path);
            } catch (error) {
                // console.log(error);
            }
        }
        if (error.code == "ENOENT") {
        } else next(error);
    });
};
export const parserJson = (data) =>
    process.env.DATABASE != "cheaper" ? data : JSON.parse(data);

export { execute, validate, enumTypeInput as type, auth };
