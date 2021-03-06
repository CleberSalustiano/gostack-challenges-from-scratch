import { Router } from "express";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({ name, email, password });

        delete user.password;

        return response.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

export default usersRouter;
