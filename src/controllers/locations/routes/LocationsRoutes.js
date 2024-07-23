import LocationsController from "../LocationsController.js";
import { Router } from "express";

const router = Router();

router.get("/locations", LocationsController.getRegisters);
router.get("/location", LocationsController.getRegister);
router.post("/locations", LocationsController.createRegister);
router.patch("/location", LocationsController.updateRegister);

export { router as LocationRoutes };
