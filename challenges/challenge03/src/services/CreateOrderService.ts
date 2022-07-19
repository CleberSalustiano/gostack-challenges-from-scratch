import { getRepository } from "typeorm";
import { v4 } from "uuid";
import Courier from "../models/Courier";
import Order from "../models/Order";
import Recipient from "../models/Recipient";

interface Request {
    recipient_id: string;
    courier_id: string;
    product: string;
}

class CreateOrderService {
    public async execute({
        recipient_id,
        courier_id,
        product,
    }: Request): Promise<Order> {
        const recipientRepository = getRepository(Recipient);
        const courierRepository = getRepository(Courier);
        const orderRepository = getRepository(Order);

        const recipientExists = await recipientRepository.findOne(recipient_id);

        if (!recipientExists) {
            throw Error("This recipients doesn't exists");
        }

        const courierExists = await courierRepository.findOne(courier_id);

        if (!courierExists) {
            throw Error("This courier doesn't exists");
        }

        const order = orderRepository.create({
            id: v4(),
            courier_id,
            product,
            recipient_id
        })

        await orderRepository.save(order);

        return order;
    }
}

export default CreateOrderService;
