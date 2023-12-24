import express from "express";
const router = express.Router();
import control from "../controllers/auth.controllers.js";
import { schema } from "../validation/schema/auth.schema.js";
import { validate, type } from "../config/header_routers.js";

/*
 * @auth controllers
 * public
 * @method POST
 * @work sign in as user
 */
router.post("/signup", validate(schema.signInUser, type.body), control.signUp);

/*
 * @auth controllers
 * public
 * @method POST
 * @work login
 */
router.post("/login", validate(schema.logIn, type.body), control.login);

export default router;
