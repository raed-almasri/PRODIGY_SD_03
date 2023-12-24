import express from "express";
import auth from "./auth.router.js";
import contact from "./contact.router.js";
let router = express.Router();

router.use("/auth", auth);
router.use("/contact", contact);

export default router;
