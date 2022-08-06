import { getRepository } from "typeorm";
import Courier from "../models/Courier";
import Order from "../models/Order";
import Recipient from "../models/Recipient";

class GetAllOrdersService {
    public async execute() : Promise<Order[]>{
        const orderRepository = getRepository(Order);
        const orders = await orderRepository.find();
        const newOrders : Order[] = [];

        for (const order of orders) {
            order.courier = await getRepository(Courier).findOne({where: {id: order.courier_id}}) 
            order.recipient = await getRepository(Recipient).findOne({where: {id: order.recipient_id}}) 
            newOrders.push(order)
        }
        return newOrders;
    }
}

export default GetAllOrdersService;