import userController from "../userController.js";
import { Router } from "express";

const router = Router();

router.get("/usuarios", userController.getRegisters);
router.get("/usuario", userController.getRegister);
router.post("/usuarios", userController.createRegister);
router.patch("/usuario", userController.updateRegister);

export { router as usersRoutes };
