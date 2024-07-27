import ImagesController from "../ImageController.js";
import { Router } from "express";

const router = Router();

router.get("/imagenes", ImagesController.getRegisters);
router.get("/imagen", ImagesController.getRegister);
router.post("/imagenes", ImagesController.createRegister);
router.patch("/imagen", ImagesController.updateRegister);

export { router as ImageRouter };
