import { Router } from "express";
import VentasController from "../VentasController.js";

const router = Router();

router.get("/ventas", VentasController.getRegisters);
router.get("/venta", VentasController.getRegister); // Usamos :id para obtener una venta específica
router.post("/ventas", VentasController.createRegister);
router.patch("/venta", VentasController.updateRegister); // Usamos :id para actualizar una venta específica

export { router as VentasRoutes };
