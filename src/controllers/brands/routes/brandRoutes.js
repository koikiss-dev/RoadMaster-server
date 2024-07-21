import brandController from "../brandController.js";
import { Router } from "express";

const router = Router();

router.get("/brands", brandController.getRegisters);
router.get("/brand", brandController.getRegister);
router.post("/brands", brandController.createRegister);
router.patch("/brand", brandController.updateRegister);

export { router as BrandRouter };
