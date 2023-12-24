import { StatusCodes } from "http-status-codes";

import { v4 as uuidv4 } from "uuid";
import { readFileJson, writeFileJson } from "../utils/fileProcessing.js";

let Users = await readFileJson("/json/users.json");

export default {
    /*
     * @contact
     * @public
     * @method POST
     * @work
     */
    create: async (req, res) => {
        try {
            let userInfo = Users.find((item) => item.id == req.user.id);
            let index = Users.findIndex((item) => item.id == req.user.id);

            if (
                userInfo.contacts.find(
                    (item) => item.phone == req.body.phone.trim()
                )
            )
                throw new Error("phone number is already found");
            let generatedId = uuidv4();
            Users[index].contacts.push({
                id: generatedId,
                ...req.body,
            });
            await writeFileJson("/json/users.json", Users);

            res.status(StatusCodes.CREATED).json({
                success: true,
                data: {
                    msg: "successfully created",
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
     * @contact
     * @public
     * @method POST
     * @work
     */
    update: async (req, res) => {
        try {
            let userInfo = Users.find((item) => item.id == req.user.id);

            let index = Users.findIndex((item) => item.id == req.user.id);

            // check if the id of the contact is correct or not
            if (!userInfo.contacts.find((item) => item.id == req.params.id))
                throw new Error("id of the concat is incorrect");

            if (
                userInfo.contacts.find(
                    (item) =>
                        item.phone == req.body.phone.trim() &&
                        item.id !== req.params.id.trim()
                )
            )
                throw new Error(
                    "phone number is already found for other contact"
                );
            let contactIndex = userInfo.contacts.findIndex(
                (item) => item.id == req.params.id
            );

            Users[index].contacts[contactIndex] = {
                id: Users[index].contacts[contactIndex].id,
                ...req.body,
            };
            await writeFileJson("/json/users.json", Users);

            res.status(StatusCodes.OK).json({
                success: true,
                data: {
                    msg: "successfully updated",
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
     * @contact
     * @public
     * @method POST
     * @work
     */
    delete: async (req, res) => {
        try {
            let userInfo = Users.find((item) => item.id == req.user.id);

            let index = Users.findIndex((item) => item.id == req.user.id);

            // check if the id of the contact is correct or not
            if (!userInfo.contacts.find((item) => item.id == req.params.id))
                throw new Error("id of the concat is incorrect");

            let contactIndex = userInfo.contacts.findIndex(
                (item) => item.id == req.params.id
            );
            Users[index].contacts = Users[index].contacts.splice(
                contactIndex,
                1
            );
            await writeFileJson("/json/users.json", Users);

            res.status(StatusCodes.OK).json({
                success: true,
                data: {
                    msg: "successfully deleted",
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
     * @contact
     * @public
     * @method POST
     * @work
     */
    getAll: async (req, res) => {
        try {
            let userInfo = Users.find((item) => item.id == req.user.id);

            res.status(StatusCodes.OK).json({
                success: true,
                data: userInfo,
            });
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                success: false,
                error: error.message,
            });
        }
    },
};
