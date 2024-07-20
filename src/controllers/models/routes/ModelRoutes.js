
import ModelsController from "../ModelController.js";
import { Router } from "express";

const router = Router();

router.get("/models", ModelsController.getRegisters);
router.get("/models", ModelsController.getRegister);
router.post("/models", ModelsController.createRegister);
router.patch("/models", ModelsController.updateRegister);

export { router as ModelRoutes };