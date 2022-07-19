import { getRepository } from "typeorm";
import { v4 } from "uuid";
import DeliveryProblem from "../models/DeliveryProblem";
import Order from "../models/Order";

interface Request {
    delivery_id: string;
    description: string;
}

class CreateDeliveryProblemService {
    public async execute({
        delivery_id,
        description,
    }: Request): Promise<DeliveryProblem> {
        const deliveryProblemsRepository = getRepository(DeliveryProblem);
        const orderRepository = getRepository(Order);

        const order = await orderRepository.findOne({
            where: { id: delivery_id },
        });

        if (!order) {
            throw Error("This order doesn't exist")
        }

        const deliveryProblem = deliveryProblemsRepository.create({
            id: v4(), delivery_id, description
        });

        await deliveryProblemsRepository.save(deliveryProblem);

        return deliveryProblem;
    }
}

export default CreateDeliveryProblemService;
