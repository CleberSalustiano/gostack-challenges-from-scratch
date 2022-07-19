import { Router } from "express";
import { getRepository } from "typeorm";
import DeliveryProblem from "../models/DeliveryProblem";
import CreateDeliveryProblemService from "../services/CreateDeliveryProblemService";
import ListAllOrderWIthProblemService from "../services/ListAllOrderWIthProblemService";

const deliveryRouter = Router();

deliveryRouter.get("/", async (request, response) => {
    const listAllOrderWIthProblem = new ListAllOrderWIthProblemService();
    const deliveryWithProblems = await listAllOrderWIthProblem.execute();

    return response.json(deliveryWithProblems);
});

deliveryRouter.get("/:id/problems", async (request, response) => {
    const { id } = request.params;

    const deliveryProblemsRepository = getRepository(DeliveryProblem);
    const deliveryProblems = await deliveryProblemsRepository.find({
        where: { delivery_id: id },
    });

    return response.json(deliveryProblems);
});

deliveryRouter.post("/:id/problems", async (request, response) => {
    try {
        const { id } = request.params;
        const { description } = request.body;

        const createDeliveryProblem = new CreateDeliveryProblemService();
        const deliveryProblem = await createDeliveryProblem.execute({
            delivery_id: id,
            description,
        });

        return response.json(deliveryProblem);

    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

export default deliveryRouter;
