import VehicleController from "../VehicleController.js";
import { Router } from "express";

const router = Router();

router.get("/vehiculos", VehicleController.getRegisters);
router.get("/vehiculo", VehicleController.getRegister);
router.post("/vehiculos", VehicleController.createRegister);
router.patch("/vehiculo", VehicleController.updateRegister);

export { router as VehiclesRoutes };
