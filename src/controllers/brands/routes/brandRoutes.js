import brandController from "../brandController.js";
import { Router } from "express";

const router = Router();

router.get("/brands", brandController.getRegisters);
router.get("/brands", brandController.getRegister);
router.post("/brands", brandController.createRegister);
router.patch("/brands", brandController.updateRegister);

export { router as brandRoutes };