import express from "express";
const router = express.Router();
import control from "../controllers/contactUser.controller.js";
import { schema } from "../validation/schema/contact.schema.js";
import { auth } from "../middleware/auth.js";
import { validate, type } from "../config/header_routers.js";

router.post("/", auth, validate(schema.body, type.body), control.create);
router.put(
    "/:id",
    auth,
    validate(schema.params, type.params),
    validate(schema.body, type.body),
    control.update
);
router.delete(
    "/:id",
    auth,
    validate(schema.params, type.params),
    control.delete
);
router.get("/", auth, control.getAll);
export default router;
