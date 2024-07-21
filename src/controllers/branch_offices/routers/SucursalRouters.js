import SucursalController from "../SucursalController.js";
import { Router } from "express";

const router = Router();

router.get("/sucursal", SucursalController.getRegisters);
router.get("/sucursal", SucursalController.getRegister);
router.post("/sucursal", SucursalController.createRegister);
router.patch("/sucursal", SucursalController.updateRegister);

export { router as SucursaRouter};
