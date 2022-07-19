import { getRepository } from "typeorm";
import Courier from "../models/Courier";
import path from "path";
import fs from "fs";
import uploadConfig from "../config/upload";

interface Request {
    courier_id: string;
    avatarFileName: string;
}

class UpdateCouriersAvatarService {
    public async execute({
        courier_id,
        avatarFileName,
    }: Request): Promise<Courier> {
        const courierRepository = getRepository(Courier);

        const courier = await courierRepository.findOne({
            where: { id: courier_id },
        });

        if (!courier) {
            throw Error("This Courier doesn't exist");
        }

        if (!!courier.avatar_id) {
            const courierAvatarFilePath = path.join(
                uploadConfig.directory,
                courier.avatar_id
            );

            const courierAvatarFilePathExists = await fs.promises.stat(courierAvatarFilePath);

            if (courierAvatarFilePathExists) {
                await fs.promises.unlink(courierAvatarFilePath);
            }
        }

        courier.avatar_id = avatarFileName;

        await courierRepository.save(courier);

        return courier;
    }
}

export default UpdateCouriersAvatarService;