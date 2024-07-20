import criticController from "../criticController.js";
import { Router } from "express";

const router = Router();

router.get("/critics", criticController.getRegisters);
router.get("/critics", criticController.getRegister);
router.post("/critics", criticController.createRegister);
router.patch("/critics", criticController.updateRegister);

export { router as criticRoutes };