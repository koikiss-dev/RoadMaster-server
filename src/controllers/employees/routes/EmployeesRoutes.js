import EmployeeController from "../EmployeeController.js";
import { Router } from "express";

const router = Router();

router.get("/employees", EmployeeController.getRegisters);
router.get("/employee", EmployeeController.getRegister);
router.post("/employees", EmployeeController.createRegister);
router.patch("/employee", EmployeeController.updateRegister);

export { router as EmployeesRoutes };
