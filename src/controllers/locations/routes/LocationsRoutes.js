import LocationsController from "../LocationsController.js";
import { Router } from "express";

const router = Router();

router.get("/ubicaciones", LocationsController.getRegisters);
router.get("/ubicacion", LocationsController.getRegister);
router.post("/ubicaciones", LocationsController.createRegister);
router.patch("/ubicacion", LocationsController.updateRegister);

export { router as LocationRoutes };
