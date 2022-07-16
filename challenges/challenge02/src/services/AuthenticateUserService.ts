import User from "../models/Users";
import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";

interface Request {
    email: string;
    password: string;
}

interface Response {
    token: string;
    user: User;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ where: { email } });

        const messageErrorLogin = "Incorrect email/password combination";

        if (!user) {
            throw Error(messageErrorLogin);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw Error(messageErrorLogin);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });

        return {
            user,
            token,
        };
    }
}

export default AuthenticateUserService;
