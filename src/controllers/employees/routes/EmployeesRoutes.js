import EmployeeController from "../EmployeeController.js";
import { Router } from "express";

const router = Router();

router.get("/empleados", EmployeeController.getRegisters);
router.get("/empleado", EmployeeController.getRegister);
router.post("/empleados", EmployeeController.createRegister);
router.patch("/empleado", EmployeeController.updateRegister);

export { router as EmployeesRoutes };
