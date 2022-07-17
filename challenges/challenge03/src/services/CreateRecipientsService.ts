import { getRepository } from "typeorm";
import Recipient from "../models/Recipient";
import { v4 } from "uuid";

import { hash } from "bcryptjs";

interface Request {
    name: string;
    street: string;
    number: string;
    complement: string;
    state: string;
    city: string;
    cep: string;
}

class CreateRecipientService {
    public async execute({
        name,
        street,
        number,
        complement,
        cep,
        city,
        state,
    }: Request): Promise<Recipient> {
        const recipientRepository = getRepository(Recipient);

        const id = v4();

        const recipient = recipientRepository.create({
            cep,
            city,
            complement,
            name,
            number,
            state,
            street,
            id,
        });

        await recipientRepository.save(recipient);

        return recipient;
    }
}

export default CreateRecipientService;
