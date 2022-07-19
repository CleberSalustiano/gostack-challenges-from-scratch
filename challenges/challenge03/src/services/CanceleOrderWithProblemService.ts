import { getRepository } from "typeorm";
import DeliveryProblem from "../models/DeliveryProblem";
import Order from "../models/Order";

interface Request {
    id: string;
}

class CanceleOrderWithProblemService {
    public async execute({ id }: Request): Promise<Order> {
        const deliveryProblemsRepository = getRepository(DeliveryProblem);
        const orderRepository = getRepository(Order);

        const deliveryProblem = await deliveryProblemsRepository.findOne(id);

        if (!deliveryProblem) {
            throw Error("This problem doesn't exists");
        }

        const order = await orderRepository.findOne(
            deliveryProblem.delivery_id
        );
        
        if (order instanceof Order) {
            const now = new Date();
            order.canceled_at = now;

            await orderRepository.update(
                {
                    id: order.id,
                },
                order
            );
        }
        return order;
    }
}

export default CanceleOrderWithProblemService;
