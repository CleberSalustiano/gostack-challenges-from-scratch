import { getRepository } from "typeorm";
import Order from "../models/Order";
import path from "path"
import fs from "fs";
import uploadConfig from "../config/upload"; 

interface Request{
    courier_id: string;
    order_id: string;
    signatureFileName: string;
}

class UpdateEndDateService {
    public async execute({courier_id, order_id, signatureFileName} : Request) : Promise<Order>{
        const orderRepository = getRepository(Order);

        const orders = await orderRepository.find({
            where: { courier_id },
        });

        const order = orders.find((order) => order.id === order_id);

        if (!order) {
            const orderSignatureFilePath = path.join(
                uploadConfig.directory,
                signatureFileName
            );
            await fs.promises.unlink(orderSignatureFilePath);

            throw Error(
                "This order isn't for this courier or doesn't exist"
            );
        } 
        
        if (order.start_date === null){
            throw Error(
                "This order wasn't start"
            )
        }

        order.end_date = new Date();


        if (!!order.signature_id) {
            const orderSignatureFilePath = path.join(
                uploadConfig.directory,
                order.signature_id
            );

            const orderSignatureFilePathExists = await fs.promises.stat(orderSignatureFilePath);

            if (orderSignatureFilePathExists) {
                await fs.promises.unlink(orderSignatureFilePath);
            }
        }
        
        order.signature_id = signatureFileName;


        await orderRepository.update(
            {
                id: order_id,
            },
            order
        );

        return order;
    } 
}

export default UpdateEndDateService;