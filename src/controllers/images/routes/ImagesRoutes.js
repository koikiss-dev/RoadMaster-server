import ImageController from "../ImagesController.js";
import { Router } from "express";

const router = Router();

router.get("/images", ImageController.getRegisters);
/* router.get("/vehicles/:id", VehicleController.getVehicle);
router.post("/vehicles", VehicleController.createVehicle);
router.patch("/vehicles", VehicleController.updateVehicle); */

export { router as ImageRoutes };
