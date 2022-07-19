import { getRepository } from "typeorm";
import Order from "../models/Order";

interface Request {
    courier_id: string;
    order_id: string;
}

class UpdateStartDateService {
    public async execute ({courier_id, order_id} : Request) : Promise<Order>{
        const orderRepository = getRepository(Order);

            const orders = await orderRepository.find({
                where: { courier_id },
            });

            const order = orders.find((order) => order.id === order_id);

            if (!order) {
                throw Error(
                    "This order isn't for this courier or doesn't exist"
                );
            }

            let count = 0;
            const now = new Date();
            orders.forEach((order) => {
                if (
                    order.start_date !== null &&
                    order.start_date.getDate() === now.getDate() &&
                    order.start_date.getMonth() === now.getMonth() &&
                    order.start_date.getFullYear() === now.getFullYear()
                ) {
                    count++;
                }
            });

            if (count >= 5) {
                throw Error(
                    "It's not possible to make more than FIVE starts per day"
                );
            }

            order.start_date = new Date();

            await orderRepository.update(
                {
                    id: order_id,
                },
                order
            );
            
            return order;
    }
}

export default UpdateStartDateService;