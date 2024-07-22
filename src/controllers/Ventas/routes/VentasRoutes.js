import { Router } from "express";
import VentasController from "./VentasController.js";

const router = Router();

router.get("/ventas", VentasController.getVentas);
router.get("/ventas/:id", VentasController.getVenta); // Usamos :id para obtener una venta específica
router.post("/ventas", VentasController.createVenta);
router.put("/ventas/:id", VentasController.updateVenta); // Usamos :id para actualizar una venta específica

export { router as VentasRoutes };
