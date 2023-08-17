import { Router} from "express";
import { createOrder } from "../Controllers/orderController.mjs";

const orderRouter = Router();
orderRouter.post("/newOrder",createOrder);
export{orderRouter}