import { getRepository } from "typeorm";
import { v4 } from "uuid";
import Courier from "../models/Courier";

interface Request {
    name: string;
    email: string;
}

class CreateCouriersService {
    public async execute({name, email} : Request) : Promise<Courier>{
        const courierRepository = getRepository(Courier);
        const emailExist = await courierRepository.findOne({
            where: {email}
        });

        if (emailExist){
            throw Error("This email already exist");
        }

        const id = v4();

        const courier = courierRepository.create({
            name,
            email,
            id,
        })

        await courierRepository.save(courier);

        return courier;
    }
}

export default CreateCouriersService;