
import PersonController from "../PersonController.js";
import { Router } from "express";

const router = Router();

router.get("/person", PersonController.getRegisters);
router.get("/person", PersonController.getRegister);
router.post("/person", PersonController.createRegister);
router.patch("/person", PersonController.updateRegister);

export { router as PersonRoutes };






