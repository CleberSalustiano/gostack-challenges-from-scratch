import { Router } from "express";
import courierRouter from "./courier.routes";
import deliveryRouter from "./delivery.routes";
import orderRouter from "./orders.routes";
import problemRouter from "./problem.routes";
import recipientRouter from "./recipients.routes";
import sessionRouter from "./session.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/session", sessionRouter);
routes.use("/couriers", courierRouter);
routes.use("/recipients", recipientRouter);
routes.use("/orders", orderRouter);
routes.use("/delivery", deliveryRouter);
routes.use("/problems", problemRouter);

export default routes;
