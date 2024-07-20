import userController from "../userController.js";
import { Router } from "express";

const router = Router();

router.get("/users", userController.getRegisters);
router.get("/users", userController.getRegister);
router.post("/users", userController.createRegister);
router.patch("/users", userController.updateRegister);

export { router as usersRoutes };