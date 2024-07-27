import ModelsController from "../ModelController.js";
import { Router } from "express";

const router = Router();

router.get("/modelos", ModelsController.getRegisters);
router.get("/modelo", ModelsController.getRegister);
router.post("/modelos", ModelsController.createRegister);
router.patch("/modelo", ModelsController.updateRegister);

export { router as ModelRoutes };
