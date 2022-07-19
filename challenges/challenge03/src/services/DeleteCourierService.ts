import { getRepository } from "typeorm";
import Courier from "../models/Courier";
import uploadConfig from "../config/upload"
import path from "path"
import fs from "fs"

interface Request {
    courier_id: string;
}

class DeleteCourierService {
    public async execute({courier_id}: Request) {
        const courierRepository = getRepository(Courier);
        const courier = await courierRepository.findOne({
            where: { courier_id },
        });

        if (!courier) {
            throw Error("This courier doesn't exist");
        }

        await courierRepository.remove(courier);

        const courierAvatarFilePath = path.join(
            uploadConfig.directory,
            courier.avatar_id
        );

        await fs.promises.unlink(courierAvatarFilePath);
    }
}

export default DeleteCourierService;