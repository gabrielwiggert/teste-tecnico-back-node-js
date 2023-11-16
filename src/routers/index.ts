import { Router } from "express";

import cpfRouter from "./cpfRouter.js";

const router = Router();

router.use(cpfRouter);

export default router;