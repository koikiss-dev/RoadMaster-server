import VehicleController from "../VehicleController.js";
import { Router } from "express";

const router = Router();

router.get("/vehicles", VehicleController.getVehicles);
router.post("/vehicles", VehicleController.createVehicle);

export { router as VehiclesRoutes };
