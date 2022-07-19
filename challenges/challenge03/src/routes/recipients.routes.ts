import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Recipient from "../models/Recipient";
import CreateRecipientService from "../services/CreateRecipientsService";

const recipientRouter = Router();

recipientRouter.post(
    "/",
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

recipientRouter.get(
    "/",
    ensureAuthenticated,
    async (request, response) => {
        const recipientRepository = getRepository(Recipient);
        const recipients = await recipientRepository.find();

        response.json(recipients);
    }
);


export default recipientRouter;