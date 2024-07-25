import { RegisterController } from "../RegisterController.js";
import { Router } from "express";

const router = Router();

router.get("/registros", RegisterController.getRegisters);
router.get("/registro", RegisterController.getRegister);
router.post("/registros", RegisterController.createRegister);
router.patch("/registro", RegisterController.updateRegister);

export { router as RegisterRouter };
