import { Router } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";


const sessionRouter = Router();

sessionRouter.post("/", async (request, response) => {
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
            return response.status(400).json({ error: error.message })
        }
    }
});

export default sessionRouter;
