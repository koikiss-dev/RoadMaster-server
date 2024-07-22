import vehicle_imagesController from "/vehicle_imagesController";
import { Router } from "express";

const router = Router();

router.get("/vehicle_images", vehicle_imagesController.getRegisters);
router.get("/vehicle_image", vehicle_imagesController.getRegister);
router.post("/vehicle_images", vehicle_imagesController.createRegister);
router.patch("/vehicle_image", vehicle_imagesController.updateRegister);

export { router as vehicle_imagesController};