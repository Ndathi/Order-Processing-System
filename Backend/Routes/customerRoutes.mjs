import { Router } from 'express';
import {newCustomer,allCustomers,deleteCustomer,updateCustomer} from "../Controllers/customerController.mjs"
const userRouter = Router();

userRouter.get('/',allCustomers);
userRouter.post("/",newCustomer)
userRouter.delete("/:id",deleteCustomer)
userRouter.put("/:id",updateCustomer)

export{userRouter};