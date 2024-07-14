import VehicleController from "../VehicleController.js";
import { Router } from "express";

const router = Router();

router.get("/vehicles", VehicleController.getRegisters);
router.get("/vehicles/:id", VehicleController.getRegister);
router.post("/vehicles", VehicleController.createRegister);
router.patch("/vehicles", VehicleController.updateRegister);

export { router as VehiclesRoutes };
