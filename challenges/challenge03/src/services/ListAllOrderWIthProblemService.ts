import { getRepository } from "typeorm";
import DeliveryProblem from "../models/DeliveryProblem";
import Order from "../models/Order";


class ListAllOrderWIthProblemService {
    public async execute(){
        const orderRepository = getRepository(Order);
        const deliveryProblemsRepository = getRepository(DeliveryProblem);

        const orders = await orderRepository.find();
        const deliveriesProblems = new Array<DeliveryProblem>;
        
        for (let order of orders) {
            const problem = await deliveryProblemsRepository.findOne({where: {delivery_id: order.id}})
            if (problem){
                problem.delivery = order;
                deliveriesProblems.push(problem);
            }   
        }   

        return deliveriesProblems;
    }
}

export default ListAllOrderWIthProblemService;