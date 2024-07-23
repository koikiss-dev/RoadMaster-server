import { Router } from "express";
import DireccionesController from "../DireccionesController.js";

const router = Router();

router.get("/direcciones", DireccionesController.getRegisters);
router.get("/direccion", DireccionesController.getRegister);
router.post("/direcciones", DireccionesController.createRegister);
router.patch("/direccion", DireccionesController.updateRegister);

export { router as DireccionesRoutes };
