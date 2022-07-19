import { Router } from "express";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CanceleOrderWithProblemService from "../services/CanceleOrderWithProblemService";

const problemRouter = Router();

problemRouter.delete(
    "/:id/cancel-delivery",
    ensureAuthenticated,
    async (request, response) => {
        try {
            const { id } = request.params;
            const canceleOrderWithProblem = new CanceleOrderWithProblemService();
            const order = await canceleOrderWithProblem.execute({ id });
            
            // Send email for courier saying about canceled

            return response.json(order).status(204)
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

export default problemRouter;
