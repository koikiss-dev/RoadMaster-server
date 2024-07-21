import TelefonoController from "../TelefonoController.js";
import { Router } from "express";

const router = Router();

router.get("/telefonos", TelefonoController.getRegisters);
router.get("/telefonos/:id", TelefonoController.getRegister); 
router.post("/telefonos", TelefonoController.createRegister);
router.patch("/telefonos", TelefonoController.updateRegister);

export { router as TelefonoRouters };
