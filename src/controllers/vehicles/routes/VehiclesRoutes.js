import VehicleController from "../VehicleController.js";
import { Router } from "express";

const router = Router();

router.get("/vehicles", VehicleController.getVehicles);
router.get("/vehicles/:id", VehicleController.getVehicle);
router.post("/vehicles", VehicleController.createVehicle);
router.patch("/vehicles", VehicleController.updateVehicle);

export { router as VehiclesRoutes };
