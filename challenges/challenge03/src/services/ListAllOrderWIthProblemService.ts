import { getRepository } from "typeorm";
import DeliveryProblem from "../models/DeliveryProblem";
import Order from "../models/Order";


class ListAllOrderWIthProblemService {
    public async execute(){
        const orderRepository = getRepository(Order);
        const deliveryProblemsRepository = getRepository(DeliveryProblem);

        const orders = await orderRepository.find();
        const ordersWithProblems = new Array<Order>;
        
        for (let order of orders) {
            const problem = await deliveryProblemsRepository.findOne({where: {delivery_id: order.id}})
            if (problem){
                ordersWithProblems.push(order);
            }   
        }   

        return ordersWithProblems;
    }
}

export default ListAllOrderWIthProblemService;