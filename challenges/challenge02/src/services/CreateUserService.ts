import { getRepository } from "typeorm";
import User from "../models/Users";
import { v4 } from "uuid";

import { hash } from "bcryptjs";

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const checkEmailExist = await userRepository.findOne({
            where: { email },
        });

        if (!!checkEmailExist) {
            throw Error("This email already exists");
        }

        const hashedPassword = await hash(password, 8);

        const id = v4();

        const user = userRepository.create({
            id,
            name,
            email,
            password: hashedPassword,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
