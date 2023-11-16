import { Router } from "express";
import cpfController from "../controllers/cpfController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { cpfSchema } from "../schemas/cpfSchema.js";

const cpfRouter = Router();

cpfRouter.post("/cpf", validateSchemaMiddleware(cpfSchema), cpfController.addCpf);
cpfRouter.get("/cpf", cpfController.getAllCpfs);
cpfRouter.get("/cpf/:cpf", cpfController.checkCpf);
cpfRouter.delete("/cpf/:cpf", cpfController.deleteCpf);

export default cpfRouter;