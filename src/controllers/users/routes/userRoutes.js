import userController from "../userController.js";
import { Router } from "express";

const router = Router();

router.get("/users", userController.getRegisters);
router.get("/user", userController.getRegister);
router.post("/users", userController.createRegister);
router.patch("/user", userController.updateRegister);

export { router as usersRoutes };
