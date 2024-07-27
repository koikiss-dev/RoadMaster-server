import brandController from "../brandController.js";
import { Router } from "express";

const router = Router();

router.get("/marcas", brandController.getRegisters);
router.get("/marca", brandController.getRegister);
router.post("/marcas", brandController.createRegister);
router.patch("/marca", brandController.updateRegister);

export { router as BrandRouter };
