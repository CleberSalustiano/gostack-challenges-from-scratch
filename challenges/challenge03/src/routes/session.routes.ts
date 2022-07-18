import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Courier from "../models/Courier";
import Recipient from "../models/Recipient";
import AuthenticateUserService from "../services/AuthenticateUserService";
import CreateCouriersService from "../services/CreateCouriersService";
import CreateRecipientService from "../services/CreateRecipientsService";
import uploadConfig from "../config/upload";
import multer from "multer";
import UpdateCouriersAvatarService from "../services/UpdateCouriersAvatarService";

const sessionRouter = Router();
const upload = multer(uploadConfig);

sessionRouter.get("/", async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        delete user.password;

        return response.json({ user, token });
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});
/* Recipients */
sessionRouter.post(
    "/recipients",
    ensureAuthenticated,
    async (request, response) => {
        try {
            const { name, street, number, complement, state, city, cep } =
                request.body;

            const createRecipiente = new CreateRecipientService();
            const recipient = await createRecipiente.execute({
                name,
                street,
                number,
                complement,
                cep,
                city,
                state,
            });

            return response.json({ recipient });
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

sessionRouter.get(
    "/recipients",
    ensureAuthenticated,
    async (request, response) => {
        const recipientRepository = getRepository(Recipient);
        const recipients = await recipientRepository.find();

        response.json(recipients);
    }
);

/* Recipients End */

/*Courier */
sessionRouter.post(
    "/couriers",
    ensureAuthenticated,
    async (request, response) => {
        try {
            const { name, email } = request.body;
            const createCourier = new CreateCouriersService();
            const courier = await createCourier.execute({ name, email });

            return response.json(courier);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

sessionRouter.get(
    "/couriers",
    ensureAuthenticated,
    async (request, response) => {
        const courierRepository = getRepository(Courier);
        const couriers = await courierRepository.find();

        return response.json(couriers);
    }
);

sessionRouter.patch(
    "/couriers/avatar/:id",
    ensureAuthenticated,
    upload.single("avatar"),
    async (request, response) => {
        try {
            const { id } = request.params;

            const updateCouriersAvatar = new UpdateCouriersAvatarService();

            const courier = await updateCouriersAvatar.execute({
                courier_id: id,
                avatarFileName: request.file.filename,
            });

            console.log(courier);

            return response.json(courier);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

sessionRouter.delete(
    "/couriers/:id",
    ensureAuthenticated,
    async (request, response) => {
        try {
            const { id } = request.params;

            const courierRepository = getRepository(Courier);
            const courier = await courierRepository.findOne({
                where: { id },
            });
            
            if (!courier){
                throw Error("This courier doesn't exist");
            } 

            await courierRepository.remove(courier);
            
            return response.json().status(204);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({error: error.message}).status(400);
            }
        }
    }
);

/*Courier End*/

export default sessionRouter;
