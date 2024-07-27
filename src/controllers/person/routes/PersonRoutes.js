import PersonController from "../PersonController.js";
import { Router } from "express";

const router = Router();

router.get("/personas", PersonController.getRegisters);
router.get("/persona", PersonController.getRegister);
router.post("/personas", PersonController.createRegister);
router.patch("/persona", PersonController.updateRegister);

export { router as PersonRoutes };
