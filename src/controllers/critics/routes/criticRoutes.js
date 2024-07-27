import criticController from "../criticController.js";
import { Router } from "express";

const router = Router();

router.get("/criticas", criticController.getRegisters);
router.get("/critica", criticController.getRegister);
router.post("/criticas", criticController.createRegister);
router.patch("/critica", criticController.updateRegister);

export { router as criticRoutes };
