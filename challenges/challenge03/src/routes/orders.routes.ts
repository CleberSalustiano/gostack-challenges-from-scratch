import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Order from "../models/Order";
import CreateOrderService from "../services/CreateOrderService";
import UpdateOrderService from "../services/UpdateOrderService";

const orderRouter = Router();

orderRouter.get("/", ensureAuthenticated, async (request, response) => {
    const orderRepository = getRepository(Order);
    const orders = await orderRepository.find();

    return response.json(orders);
});

orderRouter.post("/", ensureAuthenticated, async (request, response) => {
    try {
        const { recipient_id, courier_id, product } = request.body;
        const createOrder = new CreateOrderService();
        const order = await createOrder.execute({
            recipient_id,
            courier_id,
            product,
        });

        // create a send Email for Courier.

        return response.json(order);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

orderRouter.delete("/:id", ensureAuthenticated, async (request, response) => {
    try {
        const { id } = request.params;

        const orderRepository = getRepository(Order);

        const order = await orderRepository.findOne(id);

        if (!order) {
            throw Error("This orders doesn't exist");
        }

        await orderRepository.remove(order);

        return response.json().status(204);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

orderRouter.put("/:id", ensureAuthenticated, async (request, response) => {
    try {
        const { id } = request.params;
        const { recipient_id, courier_id, product } = request.body;

        const updateOrder = new UpdateOrderService();
        const order = updateOrder.execute({
            courier_id,
            id,
            product,
            recipient_id,
        });

        return response.json(order);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});
export default orderRouter;
