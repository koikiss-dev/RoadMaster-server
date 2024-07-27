import EmailController from "../EmailsController.js";
import { Router } from "express";

const router = Router();

router.get("/emails", EmailController.getRegisters);
router.get("/email", EmailController.getRegister);
router.post("/emails", EmailController.createRegister);
router.patch("/email", EmailController.updateRegister);

export { router as EmailRouter };
