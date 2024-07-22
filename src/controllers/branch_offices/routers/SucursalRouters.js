import SucursalController from "../SucursalController.js";
import { Router } from "express";

const router = Router();

router.get("/sucursales", SucursalController.getRegisters);
router.get("/sucursal", SucursalController.getRegister);
router.post("/sucursales", SucursalController.createRegister);
router.patch("/sucursal", SucursalController.updateRegister);

export { router as SucursalRouter };
