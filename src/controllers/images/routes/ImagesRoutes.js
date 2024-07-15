//no working
import ImageController from "../ImagesController.js";
import { Router } from "express";

const router = Router();

router.get("/images", ImageController.getRegisters);

export { router as ImageRoutes };
