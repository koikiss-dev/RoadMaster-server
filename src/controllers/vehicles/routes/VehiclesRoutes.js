import VehicleController from "../VehicleController.js";
import { Router } from "express";

const router = Router();

router.get("/vehicles", VehicleController.getRegisters);
router.get("/vehicle", VehicleController.getRegister);
router.post("/vehicles", VehicleController.createRegister);
router.patch("/vehicle", VehicleController.updateRegister);

export { router as VehiclesRoutes };
