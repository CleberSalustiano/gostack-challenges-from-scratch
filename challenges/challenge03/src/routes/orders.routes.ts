import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Order from "../models/Order";
import CreateOrderService from "../services/CreateOrderService";
import GetAllOrdersService from "../services/GetAllOrdersService";
import UpdateOrderService from "../services/UpdateOrderService";

const orderRouter = Router();

orderRouter.get("/", ensureAuthenticated, async (request, response) => {
    try {
        const getAllOrders = new GetAllOrdersService;
        const orders = await getAllOrders.execute();

        return response.json(orders);
    } catch (error) {
        if (error instanceof Error) {
            return response.status(400).json({ error: error.message });
        }
    }
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
            return response.status(400).json({ error: error.message });
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
            return response.status(400).json({ error: error.message });
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
            return response.status(400).json({ error: error.message });
        }
    }
});
export default orderRouter;
