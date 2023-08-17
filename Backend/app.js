// import getImage from "./Controllers/imageController";
import express, { json} from "express";
import cors from "cors"
import pkg from  "swagger-ui-express"


import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
const app = express();

import {userRouter} from "./Routes/customerRoutes.mjs"
import { itemRouter } from "./Routes/itemRoutes.mjs";
import { orderRouter } from "./Routes/orderRoutes.mjs";
import { connect } from "mongoose";

const port = 4000;
import { config } from "dotenv";

dotenv.config();
app.use(cors())
app.use(json());

//Swagger UI documentation
// const options = {
//   definition: {
//     openapi: "3.1.0",
//     info: {
//       title: "LogRocket Express API with Swagger",
//       version: "0.1.0",
//       description:
//         "This is a simple CRUD API application made with Express and documented with Swagger",
//       license: {
//         name: "MIT",
//         url: "https://spdx.org/licenses/MIT.html",
//       },
//       contact: {
//         name: "LogRocket",
//         url: "https://logrocket.com",
//         email: "info@email.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:4000",
//       },
//     ],
//   },
//   apis: ["./items/*.mjs","./orders/*.mjs"],
// };

// const specs = swaggerJSDoc(options);
// app.use(
//   "/api-docs",
//   pkg.serve,
//   pkg.setup(specs,{explorer:true}),
// );

//Database connection
const db =
  "mongodb+srv://ndathiian:dkhoJOTeaC728yfS@interviewcluster.ev1rsin.mongodb.net/?retryWrites=true&w=majority";

connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to the database"))
  .catch();

  // application start server listening on port
app.listen(port, () => console.log("listening on port 3000"));
app.use("/customers",userRouter);
app.use("/items",itemRouter);
app.use("/orders",orderRouter);
