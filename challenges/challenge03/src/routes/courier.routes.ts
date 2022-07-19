import { Router } from "express";
import multer from "multer";
import { getRepository } from "typeorm";
import uploadConfig from "../config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import Courier from "../models/Courier";
import CreateCouriersService from "../services/CreateCouriersService";
import UpdateCouriersAvatarService from "../services/UpdateCouriersAvatarService";
import fs from "fs";
import path from "path";
import Order from "../models/Order";
import UpdateEndDateService from "../services/UpdateEndDateService";
import UpdateStartDateService from "../services/UpdateStartDateService";
import DeleteCourierService from "../services/DeleteCourierService";

const courierRouter = Router();
const upload = multer(uploadConfig);

courierRouter.post("/", ensureAuthenticated, async (request, response) => {
    try {
        const { name, email } = request.body;
        const createCourier = new CreateCouriersService();
        const courier = await createCourier.execute({ name, email });

        return response.json(courier);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

courierRouter.get("/", ensureAuthenticated, async (request, response) => {
    const courierRepository = getRepository(Courier);
    const couriers = await courierRepository.find();

    return response.json(couriers);
});

courierRouter.patch(
    "/avatar/:id",
    ensureAuthenticated,
    upload.single("avatar"),
    async (request, response) => {
        try {
            const { id } = request.params;

            const updateCouriersAvatar = new UpdateCouriersAvatarService();

            const courier = await updateCouriersAvatar.execute({
                courier_id: id,
                avatarFileName: request.file.filename,
            });

            return response.json(courier);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

courierRouter.delete("/:id", ensureAuthenticated, async (request, response) => {
    try {
        const { id } = request.params;

        const deleteCourier = new DeleteCourierService;

        await deleteCourier.execute({courier_id: id});

        return response.json().status(204);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

courierRouter.get("/:id/deliveries", async (request, response) => {
    try {
        const { id } = request.params;
        const orderRepository = getRepository(Order);

        const orders = await orderRepository.find({
            where: { courier_id: id },
        });

        return response.json(orders);
    } catch (error) {
        if (error instanceof Error) {
            return response.json({ error: error.message }).status(400);
        }
    }
});

courierRouter.post(
    "/:courier_id/deliveries/start",
    async (request, response) => {
        try {
            const { courier_id } = request.params;
            const { order_id } = request.body;

            const updateStartDate = new UpdateStartDateService;
            const order = await updateStartDate.execute({courier_id, order_id});
            
            // Define hour of the day for start delivery.

            return response.json(order);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

courierRouter.post(
    "/:courier_id/deliveries/end",
    upload.single("signature"),
    async (request, response) => {
        try {
            const { courier_id } = request.params;
            const { order_id } = request.body;

            const updateEndDate = new UpdateEndDateService();
            const order = await updateEndDate.execute({
                courier_id,
                order_id,
                signatureFileName: request.file.filename,
            });

            return response.json(order);
        } catch (error) {
            if (error instanceof Error) {
                return response.json({ error: error.message }).status(400);
            }
        }
    }
);

export default courierRouter;
