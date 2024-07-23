import VehicleimageController from "../vehicle_imagesController.js";
import { Router } from "express";

const router = Router();

router.get("/vehicle_images", VehicleimageController.getRegisters);
router.get("/vehicle_image", VehicleimageController.getRegister);
router.post("/vehicle_images", VehicleimageController.createRegister);
router.patch("/vehicle_image", VehicleimageController.updateRegister);

export { router as VehicleImageRoutes };
