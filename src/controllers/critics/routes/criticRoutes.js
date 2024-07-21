import criticController from "../criticController.js";
import { Router } from "express";

const router = Router();

router.get("/critics", criticController.getRegisters);
router.get("/critic", criticController.getRegister);
router.post("/critics", criticController.createRegister);
router.patch("/critic", criticController.updateRegister);

export { router as criticRoutes };
