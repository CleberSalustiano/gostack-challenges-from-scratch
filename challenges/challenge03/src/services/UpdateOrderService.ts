import { getRepository } from "typeorm";
import { v4 } from "uuid";
import Courier from "../models/Courier";
import Order from "../models/Order";
import Recipient from "../models/Recipient";

interface Request {
    id: string;
    product: string;
    recipient_id: string;
    courier_id: string;
}

class UpdateOrderService {
    public async execute({
        courier_id,
        id,
        product,
        recipient_id,
    }: Request): Promise<Order> {
        const recipientRepository = getRepository(Recipient);
        const courierRepository = getRepository(Courier);
        const orderRepository = getRepository(Order);

        const oldOrder = await orderRepository.findOne(id);

        if (!oldOrder) {
            throw Error("This recipients doesn't exists");
        }

        const recipientExists = await recipientRepository.findOne(recipient_id);

        if (!recipientExists) {
            throw Error("This recipients doesn't exists");
        }

        const courierExists = await courierRepository.findOne(courier_id);

        if (!courierExists) {
            throw Error("This courier doesn't exists");
        }

        await orderRepository.delete(oldOrder);

        const order = orderRepository.create({
            id,
            courier_id,
            product,
            recipient_id,
        });

        await orderRepository.save(order);

        return order;
    }
}

export default UpdateOrderService;
